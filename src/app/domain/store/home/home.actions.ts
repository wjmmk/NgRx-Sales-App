import { createAction, props } from "@ngrx/store";
import { IKpi, IOrders, IProducts } from "src/app/core/models/products.model";


export const getKpisAction = createAction(
    '[Home] GetKpisAction'
)

export const getOrdersAction = createAction(
    '[Home] getOrdersAction'
)

export const getProductsAction = createAction(
    '[Home] getProductsAction'
)

export const successKpisAction = createAction(
    '[Home]SuccessKpisAction',
    props<{ kpis: IKpi[] }>()
);

export const successOrdersAction = createAction(
    '[Home]SuccessOrdersAction',
    props<{ orders: IOrders[] }>()
);
  
export const successProductsAction = createAction(
    '[Home]SuccessProductsAction',
    props<{ products: IProducts[] }>()
);