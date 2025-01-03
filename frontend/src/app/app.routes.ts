import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { TendenciasAgriculturaSostenibleComponent } from './components/tendencias-agricultura-sostenible/tendencias-agricultura-sostenible.component';
import { SistemasRiegoInteligenteComponent } from './components/sistemas-riego-inteligente/sistemas-riego-inteligente.component';
import { ProductividadCampoComponent } from './components/productividad-campo/productividad-campo.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { SuccessComponent } from './components/success/success.component';
import { MisPedidosComponent } from './components/mis-pedidos/mis-pedidos.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PedidosVendedorComponent } from './components/pedidos-vendedor/pedidos-vendedor.component';
import { TransportadorComponent } from './components/transportador/transportador.component';
import { PedidosTransportadoraComponent } from './components/pedidos-transportadora/pedidos-transportadora.component';
import { ConfirmacionCuentaComponent } from './components/confirmacion-cuenta/confirmacion-cuenta.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { CalidadComponent } from './components/calidad/calidad.component';
import { CalificarComponent } from './components/calificar/calificar.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { AuditarComponent } from './components/auditar/auditar.component';
import { ContratoCompradorComponent } from './components/contrato-comprador/contrato-comprador.component';
import { ContratoVendedorComponent } from './components/contrato-vendedor/contrato-vendedor.component';
import { GananciasComponent } from './components/ganancias/ganancias.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'mercado', component: MercadoComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'cancel', component: CancelComponent },
    { path: 'transportador/:id', component: TransportadorComponent },
    { path: 'empresa-transportadora', component: PedidosTransportadoraComponent },
    { path: 'mis-pedidos', component: MisPedidosComponent },
    { path: 'pedidos', component: PedidosVendedorComponent },
    { path: 'seguimiento/:id', component: SeguimientoComponent },
    { path: 'publicar', component: PublicarComponent },
    { path: 'pasarela-pago', component: PaymentComponent },
    { path: 'mis-publicaciones', component: MisProductosComponent },
    { path: 'productividad-campo', component: ProductividadCampoComponent },
    { path: 'sistemas-riego-inteligente', component: SistemasRiegoInteligenteComponent },
    { path: 'tendencias-agricultura-sostenible', component: TendenciasAgriculturaSostenibleComponent },
    { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
    { path: 'terminos-condiciones', component: TerminosCondicionesComponent },
    { path: 'confirmar/:token', component: ConfirmacionCuentaComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'reset-password/:token', component: ResetPasswordComponent },
    { path: 'producto/:id', component: ProductoDetalleComponent },
    { path: 'calidad', component: CalidadComponent },
    { path: 'mis-estadisticas', component: EstadisticasComponent },
    { path: 'auditar', component: AuditarComponent },
    { path: 'ganancias', component: GananciasComponent },
    { path: 'contrato-comprador', component: ContratoCompradorComponent },
    { path: 'contrato-vendedor', component: ContratoVendedorComponent },
    { path: 'calificar/:id', component: CalificarComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];