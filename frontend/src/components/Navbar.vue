<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/logo.png" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul id="header-tabs" class="navbar-nav me-auto mb-2">
            <li id="home-header-tab" class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a id="login-header-tab" class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/api/_hc/ready" target="_blank"
                >Health</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/user/registration"
                >ClientId [<span class="tdc_client_id"></span>]</a
              >
            </li>
          </ul>
          <a href="/user/summary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="stripe">
        <div class="stripe-colors bg-red"></div>
        <div class="stripe-colors bg-orange"></div>
        <div class="stripe-colors bg-yellow"></div>
        <div class="stripe-colors bg-green"></div>
        <div class="stripe-colors bg-dark-green"></div>
        <div class="stripe-colors bg-blue"></div>
        <div class="stripe-colors bg-dark-blue"></div>
        <div class="stripe-colors bg-violet"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>