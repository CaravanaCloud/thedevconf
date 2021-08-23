<template>
  <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active background-home">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Confirme já sua inscrição!</h1>
              <p>
                A inscrição no TDC Basic Pass é gratúita e já te da acesso à
                trilha Stadium e muitos outros palcos e atividades.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="/user/registration"
                  >Registre-se já!</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="carousel-item background-home">
          <div class="container">
            <div class="carousel-caption">
              <h1>Garanta já o seu TDC</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>

        <div class="carousel-item background-home">
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
      <div
        class="tab-content card card-body p-5 form-basic-pass-contact-request"
        id="pills-tabContent"
      >
        <div class="text-center mb-3">
          <h2 class="title">
            GARANTA SEU BASIC PASS FREE AQUI<br />
            ATRAVÉS DO REGISTRO SIMPLIFICADO!
          </h2>
        </div>
        <div class="text-start mb-3">
          <p>
            Através do registro simplificado você consegue garantir as suas
            entradas em apenas alguns minutos e voltar depois para completar os
            seus dados. Aproveite!
          </p>
        </div>
        <form class="row g-3 needs-validation" novalidate>
          <div class="form-floating col-md-12">
            <input
              id="vo_name_basic_pass_contact_request"
              type="text"
              class="form-control h-auto"
              aria-label="Nome"
              required
            />
            <label class="ms-2" for="vo_name_basic_pass_contact_request"
              >Nome</label
            >
          </div>
          <div class="form-floating col-md-6">
            <input
              id="vo_email_basic_pass_contact_request"
              type="email"
              class="form-control h-auto"
              aria-label="Email"
              onkeyup="mustBeEquals(event,'vo_email_basic_pass_contact_request','vo_email_confirmation_basic_pass_contact_request')"
              required
            />
            <label class="ms-2" for="vo_email_basic_pass_contact_request"
              >Email</label
            >
          </div>
          <div class="form-floating col-md-6">
            <input
              id="vo_email_confirmation_basic_pass_contact_request"
              type="email"
              class="form-control h-auto"
              aria-label="Confirme o email"
              onkeyup="mustBeEquals(event,'vo_email_basic_pass_contact_request','vo_email_confirmation_basic_pass_contact_request')"
              required
            />
            <label
              class="ms-2"
              for="vo_email_confirmation_basic_pass_contact_request"
              >Confirme o email</label
            >
          </div>
          <div class="form-check ms-2">
            <input
              id="vo_accepted_terms_basic_pass_contact_request"
              class="form-check-input"
              type="checkbox"
            />
            <label
              class="form-check-label"
              for="vo_accepted_terms_basic_pass_contact_request"
            >
              Eu li e concordo com os termos de uso de dados. Entenda como seus
              dados estão sendo utilizados clicando
              <a href="https://thedevconf.com/tdc/2021/connections/privacidade"
                >aqui</a
              >.
            </label>
          </div>
          <div class="col-md-12 text-end">
            <button
              type="submit"
              class="btn btn-primary primary-button"
              onclick="handleFormSubmit('basic-pass-contact-request-form')"
            >
              GARANTIR
            </button>
          </div>
        </form>
      </div>
      <hr class="featurette-divider" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import '@/assets/carousel.css'

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
