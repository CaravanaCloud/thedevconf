// eagerly import theme styles so as we can override them
import '@vaadin/vaadin-lumo-styles/all-imports';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<custom-style>
<style include='lumo-badge'>
        html {
      --lumo-primary-color: #02263D;
      --lumo-error-color: #FC521F;
      --lumo-success-color: #159749;
      --lumo-success-text-color: #159749;
      --lumo-error-text-color: #FC521G;
      --lumo-body-text-color: #fff;
      --lumo-primary-text-color: #02263E;

    }

</style>
</custom-style>


`;

document.head.appendChild($_documentContainer.content);
