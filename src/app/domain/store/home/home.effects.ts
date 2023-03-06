import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as homeActions from './home.actions';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/data/services/product/products.service';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private _productsService: ProductsService
  ) {}

  getKpis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.getKpisAction),
      switchMap((action) =>
        this._productsService.getKpis().pipe(
          map((response) => {
            const kpis = response;
            return homeActions.successKpisAction({ kpis });
          })
        )
      )
    )
  );


  //   loginSuccess$ = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(authActions.loginSuccessAction),
  //         tap((_) => {
  //           this._router.navigateByUrl('home');
  //         })
  //       ),
  //     { dispatch: false }
  //   );
}