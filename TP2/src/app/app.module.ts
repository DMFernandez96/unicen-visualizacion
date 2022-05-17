import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './components/home/home.component';
import { ForPlayingComponent } from './components/for-playing/for-playing.component';
import { PlayingComponent } from './components/playing/playing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, ForPlayingComponent, PlayingComponent, RegisterComponent, LoginComponent, SearchComponent, CategoryComponent, ProfileComponent, FavoritesComponent, IconComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
