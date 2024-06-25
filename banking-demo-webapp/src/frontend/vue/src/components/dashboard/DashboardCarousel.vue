<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class=""
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"
                class="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777">
                    </rect>
                    <text x="50%" y="50%" fill="#555" dy=".3em">To jest dramat</text>
                </svg>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Kredyt konsumencki</h5>
                    <p>Małe kwoty, duże oprocentowanie! Za każde pożyczone 100PLN, oddajesz TYLKO 300PLN!</p>
                </div>
            </div>

            <div class="carousel-item active">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444"
                        dy=".3em">Second slide</text>
                </svg>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lokaty oszczędnościowe</h5>
                    <p>U nas twoje pieniądze są bezpieczne! Nikt włącznie z Tobą nie będzie miał do nich dostępu!
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333"
                        dy=".3em">Third slide</text>
                </svg>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Kredyty mieszkaniowe</h5>
                    <p>Niewolniczo-lichwiarski, 50-cioletni kredyt na twoje własne 10mkw dziury w ziemi w
                        podwarszawskich lasach!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>