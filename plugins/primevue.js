import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Chart from "primevue/chart";
import Password from 'primevue/password';
import Sidebar from 'primevue/sidebar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; //optional for column grouping
import Row from 'primevue/row';
import PanelMenu from 'primevue/panelmenu';
import Dialog from 'primevue/dialog';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Textarea from 'primevue/textarea';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';






export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService)

    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Toast", Toast);
    nuxtApp.vueApp.component("chart", Chart);
    nuxtApp.vueApp.component("Password", Password);
    nuxtApp.vueApp.component("Sidebar", Sidebar);
    nuxtApp.vueApp.component("DataTable", DataTable);
    nuxtApp.vueApp.component("Column", Column);
    nuxtApp.vueApp.component("ColumnGroup", ColumnGroup);
    nuxtApp.vueApp.component("Row", Row);
    nuxtApp.vueApp.component("PanelMenu", PanelMenu);
    nuxtApp.vueApp.component("Dialog", Dialog);
    nuxtApp.vueApp.component("Accordion", Accordion);
    nuxtApp.vueApp.component("AccordionTab", AccordionTab);
    nuxtApp.vueApp.component("Textarea", Textarea);
    nuxtApp.vueApp.component("ConfirmPopup", ConfirmPopup);
    nuxtApp.vueApp.component("ConfirmationService", ConfirmationService);


    //other components that you need
});