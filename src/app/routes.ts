import { Routes } from "@angular/router";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { BookComponent } from "./book/book-list/book.component";

export const appRoutes: Routes = [
    {
        path: "signup", component: SignUpComponent,
        children: [{
            path: "", component: SignUpComponent
        }]
    },
    {
        path: "", component: SignInComponent,
        children: [{
            path: "", component: SignInComponent
        }]
    },
    {
        path: "", redirectTo: "/login", pathMatch: "full"
    },
    {
        path: "", redirectTo: "/signup", pathMatch: "full"
    },
]