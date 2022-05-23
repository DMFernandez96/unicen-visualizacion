import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/molecules/header/header.component";
import { FooterComponent } from "./components/molecules/footer/footer.component";
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
import { HeaderOverlayProfileComponent } from "./components/molecules/header-overlay-profile/header-overlay-profile.component";
import { CardGameComponent } from "./components/atoms/card-game/card-game.component";
import { CategoryCardsGroupComponent } from "./components/molecules/category-cards-group/category-cards-group.component";
import { ButtonComponent } from "./components/atoms/button/button.component";
import { CardFavoritesComponent } from "./components/atoms/card-favorites/card-favorites.component";
import { FavoritesCardsGroupComponent } from "./components/molecules/favorites-cards-group/favorites-cards-group.component";
import { AdvertisingComponent } from "./components/atoms/advertising/advertising.component";
import { InputComponent } from "./components/atoms/input/input.component";
import { FormsModule } from "@angular/forms";

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
		CardGameComponent,
		CategoryCardsGroupComponent,
		ButtonComponent,
		CardFavoritesComponent,
		FavoritesCardsGroupComponent,
		AdvertisingComponent,
		InputComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
