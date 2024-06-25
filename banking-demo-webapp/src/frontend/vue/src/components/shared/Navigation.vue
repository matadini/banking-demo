<template>
    <div>
        <ul class="nav d-flex justify-content-end ">
            <li class="nav-item d-flex align-items-center">
                <i class="bi bi-file-earmark-break"></i>
                <a class="nav-link active" aria-current="page" href="#">Szablony</a>
            </li>
            <li class="nav-item d-flex align-items-center">
                <i class="bi bi-envelope"></i>
                <a class="nav-link" href="#">Moje sprawy</a>
            </li>
            <li class="nav-item d-flex align-items-center">
                <i class="bi bi-paint-bucket"></i>
                <a class="nav-link" href="#">Motyw</a>
            </li>
            <li class="nav-item d-flex align-items-center">
                <i class="bi bi-gear"></i>
                <a class="nav-link" href="#">Ustawienia</a>
            </li>
        </ul>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link to="/" aria-current="page" class="nav-link active">
                        <img src="../../assets/bootstrap-logo.svg" alt="" width="30" height="24"
                        class="d-inline-block align-text-top">
                    Bootstrap
                    </router-link>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" aria-current="page" class="nav-link active">Pulpit</router-link>
                        </li>

                        <li class=" nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Płatności
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul class="d-flex flex-column list-unstyled">
                                        <li><router-link to="/payments/new" class="dropdown-item">Nowa
                                                płatność</router-link></li>
                                        <li><a class="dropdown-item" href="#">Historia transakcji</a></li>
                                        <li><a class="dropdown-item" href="#">Płatności zaplanowane</a></li>
                                        <li><a class="dropdown-item" href="#">Koszyk przelewów</a></li>
                                        <li><a class="dropdown-item" href="#">Moje rachunki</a></li>
                                    </ul>
                                </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Oferty
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ul class="d-flex flex-column list-unstyled">
                                    <li><a class="dropdown-item" href="#">Dla Ciebie</a></li>
                                    <li><a class="dropdown-item" href="#">Kredyty</a></li>
                                    <li><a class="dropdown-item" href="#">Karty</a></li>
                                    <li><a class="dropdown-item" href="#">Konta</a></li>
                                    <li><a class="dropdown-item" href="#">Oszczędności</a></li>
                                    <li><a class="dropdown-item" href="#">Oferta dla Młodych</a></li>
                                    <li><a class="dropdown-item" href="#">Inwestycje</a></li>
                                    <li><a class="dropdown-item" href="#">Ubezpieczenia</a></li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown0" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Usługi
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown0">
                                <div class="d-flex flex-row">
                                    <div class="mx-1">
                                        <div class="d-flex justify-content-center">
                                            <i class="bi bi-phone"></i>
                                            <p class="mx-4 text-center">Aplikacje</p>
                                        </div>
                                        <hr />
                                        <ul class="list-unstyled">
                                            <li><a class="dropdown-item" href="#">Kantor walutowy</a></li>
                                        </ul>

                                    </div>
                                    <div class="mx-1">
                                        <div class="d-flex justify-content-center">
                                            <i class="bi bi-file-earmark-bar-graph"></i>
                                            <p class="mx-4 text-center">eUrząd</p>
                                        </div>
                                        <hr />
                                        <ul class="list-unstyled">
                                            <li><a class="dropdown-item" href="#">Wniosek Rodzina 800+</a></li>
                                            <li><a class="dropdown-item" href="#">Wniosek 800+ dla dziecka z Ukrainy</a>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Wniosek Dobry Start</a></li>
                                            <li><a class="dropdown-item" href="#">Wniosek Rodzinny Kapitał
                                                    Opiekuńczy</a>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Profil zaufany</a></li>
                                            <li><a class="dropdown-item" href="#">Bank ID</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="d-flex justify-content-center">
                                            <i class="bi bi-three-dots"></i>
                                            <p class="mx-4 text-center">Pozostałe</p>
                                        </div>
                                        <hr />
                                        <ul class="list-unstyled">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Inwestycje
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mobile</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-success" type="submit">Wyloguj</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>