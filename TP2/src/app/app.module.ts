import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ForPlayingComponent } from "./components/pages/for-playing/for-playing.component";
import { PlayingComponent } from "./components/pages/playing/playing.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { SearchComponent } from "./components/pages/search/search.component";
import { CategoryComponent } from "./components/pages/category/category.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { FavoritesComponent } from "./components/pages/favorites/favorites.component";
import { IconComponent } from "./components/atoms/icon/icon.component";
import { LogoComponent } from "./components/atoms/logo/logo.component";
import { OverlayComponent } from "./components/atoms/overlay/overlay.component";
import { AvatarComponent } from "./components/atoms/avatar/avatar.component";
import { HeaderOverlayProfileComponent } from './components/header-overlay-profile/header-overlay-profile.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		ForPlayingComponent,
		PlayingComponent,
		RegisterComponent,
		LoginComponent,
		SearchComponent,
		CategoryComponent,
		ProfileComponent,
		FavoritesComponent,
		IconComponent,
		LogoComponent,
		OverlayComponent,
		AvatarComponent,
  HeaderOverlayProfileComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
