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
        <FormulateForm class="row g-3">
          <FormulateInput
            type="text"
            name="name"
            input-class="form-control h-auto"
            validation="required|max:80|min:5"
            label="Nome"
            label-class="ms-2"
            :element-class="(_, classes) => ['form-floating'].concat(classes)"
          />

          <div class="form-floating col-md-6">
            <FormulateInput
              type="email"
              name="email"
              input-class="form-control h-auto"
              validation="required|email|max:80|min:7"
              label="Email"
              label-class="ms-2"
              :element-class="(_, classes) => ['form-floating'].concat(classes)"
            />
          </div>

          <div class="form-floating col-md-6">
            <FormulateInput
              type="email"
              name="email_confirm"
              input-class="form-control h-auto"
              validation="required|email|max:80|min:7"
              label="Confirme o email"
              label-class="ms-2"
              :element-class="
                (context, classes) => ['form-floating'].concat(classes)
              "
            />
          </div>

          <div class="form-check ms-2">
            <FormulateInput
              type="checkbox"
              label="Eu li e concordo com os termos de uso de dados. Entenda como seus
              dados estão sendo utilizados clicando"
              label-class="form-check-label"
              name="terms"
              input-class="form-check-input"
              validation="accepted"
              :element-class="
                (context, classes) => ['form-floating'].concat(classes)
              "
            />
          </div>

          <div class="col-md-12 text-end">
            <FormulateInput
              type="submit"
              input-class="btn btn-primary primary-button"
              name="GARANTIR"
            />
          </div>
        </FormulateForm>
      </div>
      <hr class="featurette-divider" />
    </div>

    <div class="container marketing">
      <div class="row">
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it’s that good.
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  </div>
</template>

<style>
ul.formulate-input-error {
  margin-top: 30px;
}
li.formulate-input-error {
  color: red;
}
</style>