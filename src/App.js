import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import "./App.css";

import Main from "./main/Main";
import Details from "./main/Details";
import projects from "./main/assets/projects.js";

import Lights from "./projects/lightsout/Lights.js";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./projects/colorsapp/Palette";
import PaletteList from "./projects/colorsapp/PaletteList";
import SingleColorPalette from "./projects/colorsapp//SingleColorPalette";
import Page from "./projects/colorsapp/Page";
import NewPaletteForm from "./projects/colorsapp/NewPaletteForm";
import seedColors from "./projects/colorsapp/seedColors";
import { generatePalette } from "./projects/colorsapp/colorHelpers";

class App extends Component {
  constructor(props){
      super(props);
        const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
      this.state = {
        projects: projects,
        palettes: savedPalettes || seedColors
      }
      this.findRightProject = this.findRightProject.bind(this);
      this.savePalette = this.savePalette.bind(this);
      this.findPalette = this.findPalette.bind(this);
      this.deletePalette = this.deletePalette.bind(this);
  }

  findRightProject(id){
    return this.state.projects.find(function(project){
      return project.id === id;
    });
  }

  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main projects={projects}/>
          </Route>
          <Route exact path="/:id/details" render={routeProps => (
              <Details project={this.findRightProject(routeProps.match.params.id)} />
            )}>
          </Route>
          <Route exact path="/lightsout">
            <Lights />
          </Route>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} classNames='page' timeout={500}>
                  <Switch location={location}>
                    <Route
                      exact
                      path='/colorsapp/palette/new'
                      render={routeProps => (
                        <Page>
                          <NewPaletteForm
                            savePalette={this.savePalette}
                            palettes={this.state.palettes}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path='/colorsapp/palette/:paletteId/:colorId'
                      render={routeProps => (
                        <Page>
                          <SingleColorPalette
                            colorId={routeProps.match.params.colorId}
                            palette={generatePalette(
                              this.findPalette(routeProps.match.params.paletteId)
                            )}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path='/colorsapp/'
                      render={routeProps => (
                        <Page>
                          <PaletteList
                            palettes={this.state.palettes}
                            deletePalette={this.deletePalette}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path='/colorsapp/palette/:id'
                      render={routeProps => (
                        <Page>
                          <Palette
                            palette={generatePalette(
                              this.findPalette(routeProps.match.params.id)
                            )}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      render={routeProps => (
                        <Page>
                          <PaletteList
                            palettes={this.state.palettes}
                            deletePalette={this.deletePalette}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />




        </Switch>
      </div>
    )
  }
}

export default App;
