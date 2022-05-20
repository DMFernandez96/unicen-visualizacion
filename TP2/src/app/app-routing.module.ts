import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";

import { ForPlayingComponent } from "./components/pages/for-playing/for-playing.component";
import { PlayingComponent } from "./components/pages/playing/playing.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { SearchComponent } from "./components/pages/search/search.component";
import { CategoryComponent } from "./components/pages/category/category.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { FavoritesComponent } from "./components/pages/favorites/favorites.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "juego/:ID", component: ForPlayingComponent },
	{ path: "jugando", component: PlayingComponent },
	{ path: "crear-cuenta", component: RegisterComponent },
	{ path: "iniciar-sesion", component: LoginComponent },
	{ path: "busqueda", component: SearchComponent },
	{ path: "categorias/:ID", component: CategoryComponent },
	{ path: "perfil", component: ProfileComponent },
	{ path: "favoritos", component: FavoritesComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
