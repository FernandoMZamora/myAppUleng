import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'abecedario', loadChildren: './abecedario/abecedario.module#AbecedarioPageModule' },
  { path: 'numeros', loadChildren: './numeros/numeros.module#NumerosPageModule' },
  { path: 'animales', loadChildren: './animales/animales.module#AnimalesPageModule' },
  { path: 'colores', loadChildren: './colores/colores.module#ColoresPageModule' },
  { path: 'a', loadChildren: './a/a.module#APageModule' },
  { path: 'b', loadChildren: './b/b.module#BPageModule' },
  { path: 'c', loadChildren: './c/c.module#CPageModule' },
  { path: 'd', loadChildren: './d/d.module#DPageModule' },
  { path: 'e', loadChildren: './e/e.module#EPageModule' },
  { path: 'f', loadChildren: './f/f.module#FPageModule' },
  { path: 'g', loadChildren: './g/g.module#GPageModule' },
  { path: 'h', loadChildren: './h/h.module#HPageModule' },
  { path: 'i', loadChildren: './i/i.module#IPageModule' },
  { path: 'j', loadChildren: './j/j.module#JPageModule' },
  { path: 'k', loadChildren: './k/k.module#KPageModule' },
  { path: 'l', loadChildren: './l/l.module#LPageModule' },
  { path: 'm', loadChildren: './m/m.module#MPageModule' },
  { path: 'n', loadChildren: './n/n.module#NPageModule' },
  { path: 'n1', loadChildren: './n1/n1.module#N1PageModule' },
  { path: 'o', loadChildren: './o/o.module#OPageModule' },
  { path: 'p', loadChildren: './p/p.module#PPageModule' },
  { path: 'q', loadChildren: './q/q.module#QPageModule' },
  { path: 'r', loadChildren: './r/r.module#RPageModule' },
  { path: 's', loadChildren: './s/s.module#SPageModule' },
  { path: 't', loadChildren: './t/t.module#TPageModule' },
  { path: 'u', loadChildren: './u/u.module#UPageModule' },
  { path: 'v', loadChildren: './v/v.module#VPageModule' },
  { path: 'w', loadChildren: './w/w.module#WPageModule' },
  { path: 'x', loadChildren: './x/x.module#XPageModule' },
  { path: 'y', loadChildren: './y/y.module#YPageModule' },
  { path: 'z', loadChildren: './z/z.module#ZPageModule' },
  { path: 'num-uno', loadChildren: './num-uno/num-uno.module#NumUnoPageModule' },
  { path: 'num-cero', loadChildren: './num-cero/num-cero.module#NumCeroPageModule' },
  { path: 'num-dos', loadChildren: './num-dos/num-dos.module#NumDosPageModule' },
  { path: 'num-tres', loadChildren: './num-tres/num-tres.module#NumTresPageModule' },
  { path: 'num-cuatro', loadChildren: './num-cuatro/num-cuatro.module#NumCuatroPageModule' },
  { path: 'num-cinco', loadChildren: './num-cinco/num-cinco.module#NumCincoPageModule' },
  { path: 'num-seis', loadChildren: './num-seis/num-seis.module#NumSeisPageModule' },
  { path: 'num-siete', loadChildren: './num-siete/num-siete.module#NumSietePageModule' },
  { path: 'num-ocho', loadChildren: './num-ocho/num-ocho.module#NumOchoPageModule' },
  { path: 'num-nueve', loadChildren: './num-nueve/num-nueve.module#NumNuevePageModule' },
  { path: 'num-diez', loadChildren: './num-diez/num-diez.module#NumDiezPageModule' },
  { path: 'ani-ardilla', loadChildren: './ani-ardilla/ani-ardilla.module#AniArdillaPageModule' },
  { path: 'ani-vaca', loadChildren: './ani-vaca/ani-vaca.module#AniVacaPageModule' },
  { path: 'ani-mono', loadChildren: './ani-mono/ani-mono.module#AniMonoPageModule' },
  { path: 'ani-gallo', loadChildren: './ani-gallo/ani-gallo.module#AniGalloPageModule' },
  { path: 'ani-gallina', loadChildren: './ani-gallina/ani-gallina.module#AniGallinaPageModule' },
  { path: 'ani-conejo', loadChildren: './ani-conejo/ani-conejo.module#AniConejoPageModule' },
  { path: 'ani-cerdo', loadChildren: './ani-cerdo/ani-cerdo.module#AniCerdoPageModule' },
  { path: 'ani-caballo', loadChildren: './ani-caballo/ani-caballo.module#AniCaballoPageModule' },
  { path: 'ani-gato', loadChildren: './ani-gato/ani-gato.module#AniGatoPageModule' },
  { path: 'ani-perro', loadChildren: './ani-perro/ani-perro.module#AniPerroPageModule' },
  { path: 'color-blanco', loadChildren: './color-blanco/color-blanco.module#ColorBlancoPageModule' },
  { path: 'color-amarillo', loadChildren: './color-amarillo/color-amarillo.module#ColorAmarilloPageModule' },
  { path: 'color-azul', loadChildren: './color-azul/color-azul.module#ColorAzulPageModule' },
  { path: 'color-cafe', loadChildren: './color-cafe/color-cafe.module#ColorCafePageModule' },
  { path: 'color-celeste', loadChildren: './color-celeste/color-celeste.module#ColorCelestePageModule' },
  { path: 'color-naranja', loadChildren: './color-naranja/color-naranja.module#ColorNaranjaPageModule' },
  { path: 'color-negro', loadChildren: './color-negro/color-negro.module#ColorNegroPageModule' },
  { path: 'color-rojo', loadChildren: './color-rojo/color-rojo.module#ColorRojoPageModule' },
  { path: 'color-rosado', loadChildren: './color-rosado/color-rosado.module#ColorRosadoPageModule' },
  { path: 'color-verde', loadChildren: './color-verde/color-verde.module#ColorVerdePageModule' },
  { path: 'sobre-nosotros', loadChildren: './sobre-nosotros/sobre-nosotros.module#SobreNosotrosPageModule' },
  { path: 'terminos-de-uso', loadChildren: './terminos-de-uso/terminos-de-uso.module#TerminosDeUsoPageModule' },
  { path: 'error', loadChildren: './error/error.module#ErrorPageModule' },
  { path: 'instrucciones', loadChildren: './instrucciones/instrucciones.module#InstruccionesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
