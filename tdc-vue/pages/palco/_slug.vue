<template>
  <b-container>
    <b-row>
      <b-col md="5" offset-md="2" class="mt-5">
        <img class="img-fluid" src="@/assets/img/logo-boticario.png" alt="" />
        <b-card class="mt-5 mb-4 bg-dark" id="subscribe">
          <div class="text-center">
            <h2>Evento encerrado!</h2>
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
              <b-input type="text"></b-input>
            </div>

            <div class="mt-3">
              <b-label>E-mail</b-label>
              <b-input type="text"></b-input>
            </div>

            <div class="mt-3">
              <b-label>Telefone</b-label>
              <b-input type="text"></b-input>
            </div>

            <div class="mt-3">
              <b-label>Empresa</b-label>
              <b-input type="text"></b-input>
            </div>

            <div class="mt-3">
              <b-label>Cargo</b-label>
              <b-input type="text"></b-input>
            </div>

            <div class="mt-3">
              <b-label>País</b-label>
              <b-input type="text"></b-input>
            </div>

            <div class="mt-3">
              <b-label>Cidade</b-label>
              <b-input type="text"></b-input>
            </div>

            <b-form-checkbox value="orange" class="my-3">
              Confirmo que estou ciente que meus dados serão compartilhados com
              os patrocinadores Diamond e fornecedores desta edição para os fins
              discriminados na política de privacidade do TDC.*
            </b-form-checkbox>

            <b-form-group label="4 + 7 = ?" class="my-3">
              <b-input type="text"></b-input>
              <p class="text-center mt-3">
                Ao informar meus dados, eu concordo com a Política de
                Privacidade.
              </p>
            </b-form-group>

            <div class="text-center">
              <b-button variant="primary" size="large"
                >Evento encerrado</b-button
              >
            </div>
          </b-form>
        </b-card>

        <p>
          No Grupo Boticário você vai encontrar infinitas possibilidades de
          impactar a vida de milhares de pessoas todos os dias e essa é a beleza
          do que estamos fazendo. E a tecnologia, mais que uma ferramenta, se
          tornou o caminho para a construção do maior ecossistema de beleza do
          mundo. <br /><br />
          Quer saber mais? Vem conhecer a sala do gb.tech no TDC 😊
        </p>

        <h3 class="my-5">Confira a programação do gb.tech no TDC!</h3>

        <b-row class="banners">
          <b-col md="10">
            <iframe
              width="365"
              height="358"
              src="https://www.youtube.com/embed/oy9uEB9OrNM?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <div class="mt-5 text-center">
              <b-img fluid src="@/assets/img/gbtech.png"></b-img>
              <p class="mt-3">
                Descubra como o gb.tech está construindo o maior ecossistema de
                beleza do mundo!
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
          O Grupo Boticário tem <br />
          muito conteúdo pra <br />
          você no TDC TRANSFORMATION!
        </h1>
        <p class="mt-5">
          DEZENAS DE PALESTRAS E CONTEÚDO GRATUITO SOBRE TECNOLOGIA E NEGÓCIOS!
        </p>
        <p class="mt-3">
          As trilhas organizadas pelo Grupo Boticário no TDC TRANSFORMATION
          trazem uma oportunidade fantástica de aprendizado, troca de
          experiências e networking.
        </p>
        <p class="mt-3">
          A inscrição GRATUITA na Sala Grupo Boticário lhe dá acesso a todas as
          palestras e atividades e também a muito conteúdo como: Trilha Stadium,
          com palestras sobre as principais tendências do mercado; Trilha
          Carreira e Mentoria; Trilha Diversidade e Acessibilidade; TDC Expo!
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
</template>

