<template>
  <div v-if="info">
    <Menu />
    <b-container>
      <b-row>
        <b-col md="5" offset-md="1" class="mt-5">
          <img v-bind:src="info.partner.logo" class="img-fluid" alt="" />
          <b-card class="mt-5 mb-4 bg-dark" id="subscribe">
            <div class="text-center">
              <h2 v-if="info.canRegister">
                <div>Inscreva-se <span id="colored">gratuitamente!</span></div>
              </h2>
              <h2 v-if="!info.canRegister"><div>Evento encerrado!</div></h2>
              <p>
                <small>
                  (Caso tenha algum problema no preenchimento do formulário,
                  desative bloqueadores de ad e cookies no seu navegador que irá
                  resolver)
                </small>
              </p>
            </div>

            <b-form class="mt-5">
              <div class="mt-3">
                <b-label>Nome</b-label>
                <b-input type="text" v-model="form.name"></b-input>
              </div>

              <div class="mt-3">
                <b-label>E-mail</b-label>
                <b-input type="text" v-model="form.email"></b-input>
              </div>

              <div class="mt-3">
                <b-label>Telefone</b-label>
                <b-input type="text" v-model="form.phone"></b-input>
              </div>

              <div class="mt-3">
                <b-label>Empresa</b-label>
                <b-input type="text" v-model="form.company"></b-input>
              </div>

              <div class="mt-3">
                <b-label>Cargo</b-label>
                <b-input type="text" v-model="form.jobtitle"></b-input>
              </div>

              <div class="mt-3">
                <b-label>País</b-label>
                <b-input type="text" v-model="form.country"></b-input>
              </div>

              <div class="mt-3">
                <b-label>Cidade</b-label>
                <b-input type="text" v-model="form.city"></b-input>
              </div>
              <b-form-checkbox
                v-for="(item, index) in info.confirmations"
                :key="index"
                v-model="form.confirmations[index]"
                class="my-3"
              >
                {{ item.description }}
              </b-form-checkbox>

              <b-form-group :label="info.expression" class="my-3">
                <b-input type="text" v-model="expressionResult"></b-input>
                <p class="text-center mt-3">
                  Ao informar meus dados, eu concordo com a Política de
                  Privacidade.
                </p>
              </b-form-group>

              <div class="text-center">
                <b-button
                  v-if="info.canRegister"
                  variant="primary"
                  size="large"
                  :disabled="expressionDoesNotMatch()"
                  v-on:click="submit"
                  >Confirmar inscrição</b-button
                >
              </div>
            </b-form>
          </b-card>

          <p>
            {{info.description}}
          </p>

          <h3 class="my-5">Confira a programação do parceiro(a) {{info.partner.name}} no TDC!</h3>

          <b-row class="banners">
            <b-col md="10">
              <iframe v-for="(iframe,index) of info.iframes" :key="index"
                width="365"
                height="358"
                :src="iframe.url"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <div class="mt-5 text-center">
                <b-img fluid src="@/assets/img/gbtech.png"></b-img>
                <p class="mt-3">
                  Descubra como o gb.tech está construindo o maior ecossistema
                  de beleza do mundo!
                </p>
                <a href="" class="btn btn-primary btn-rounded"
                  >Conheça nosso medium</a
                >
              </div>

              <div class="mt-5 text-center">
                <b-img fluid src="@/assets/img/vemproGB.png"></b-img>
                <p class="mt-3">Mais de 150 vagas no gb.tech!</p>
                <a href="" class="btn btn-primary btn-rounded"
                  >Confira as oportunidades</a
                >
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col md="5" class="mt-5">
          <h1 class="title">
            O parceiro(a) {{info.partner.name}} tem <br />
            muito conteúdo pra <br />
            você no {{info.eventname}}!
          </h1>
          <p class="mt-5">
            DEZENAS DE PALESTRAS E CONTEÚDO GRATUITO SOBRE TECNOLOGIA E
            NEGÓCIOS!
          </p>
          <p class="mt-3">
            As trilhas organizadas pelo(a) {{info.partner.name}} no {{info.eventname}}
            trazem uma oportunidade fantástica de aprendizado, troca de
            experiências e networking.
          </p>
          <p class="mt-3" v-if="info.supportedtracks">
            A inscrição GRATUITA na Sala {{info.partner.name}} lhe dá acesso a todas
            as palestras e atividades e também a muito conteúdo como:
            <ul>
              <li v-for="(track,idx) of info.supportedtracks" :key="idx">
                {{track}}
              </li>
            </ul>
          </p>
          <p>Confira as trilhas que preparamos pra você:</p>

          <div class="mt-5">
            <div class="text-center">
              <img
                src="@/assets/img/terca.png"
                class="img-fluid week-img"
                alt=""
              />
            </div>
            <div class="card card-body bg-dark">
              <h3>Trilha Dados e Design no gb.tech | Sala Grupo Boticário</h3>
              <hr />

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00</span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="text-center">
              <img
                src="@/assets/img/quarta.png"
                class="img-fluid week-img"
                alt=""
              />
            </div>

            <div class="card card-body bg-dark">
              <h3>Trilha Dados e Design no gb.tech | Sala Grupo Boticário</h3>
              <hr />
              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="text-center">
              <img
                src="@/assets/img/quinta.png"
                class="img-fluid week-img"
                alt=""
              />
            </div>

            <div class="card card-body bg-dark">
              <h3>Trilha Dados e Design no gb.tech | Sala Grupo Boticário</h3>
              <hr />
              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span class="text-info">10h00 </span>
                <span>De Business Analytics para Data Science </span>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: null,
      expressionResult: null,
      form: {
        confirmations: {},
      },
    };
  },

  beforeCreate() {
    if (this.$route.params.id && "" !== this.$route.params.id.trim()) {
      // if id is not empty then attempt to load data from API
      this.$basicpass
        .loadLandingPageFromId(this.$route.params.id)
        .then((info) => {
          this.info = info;
          let id = 0;
          this.confirmations = {};
          this.info.confirmations.forEach((x) => {
            this.confirmations[id++] =  false ;
          });
        })
        .catch((error) => {
          alert("inválid landing page");
          console.error(error);
          this.$router.push("/");
        });
      return;
    }
    this.$router.push("/");
  },

  methods: {
    expressionDoesNotMatch() {
      return this.info.expressionResult !== +this.expressionResult;
    },
    submit() {
      console.log({ ...this.form });
    },
  },
};
</script>
