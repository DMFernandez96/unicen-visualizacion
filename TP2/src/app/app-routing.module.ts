import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

import { ForPlayingComponent } from "./components/for-playing/for-playing.component";
import { PlayingComponent } from "./components/playing/playing.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { SearchComponent } from "./components/search/search.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "por-jugar", component: ForPlayingComponent },
	{ path: "jugando", component: PlayingComponent },
	{ path: "crear-cuenta", component: RegisterComponent },
	{ path: "iniciar-sesion", component: LoginComponent },
	{ path: "busqueda", component: SearchComponent },
	{ path: "categoria", component: CategoryComponent },
	{ path: "perfil", component: ProfileComponent },
	{ path: "favoritos", component: FavoritesComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
