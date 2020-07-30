<template>
  <nuxt-link :to="'/packs/pack/01'" tag="div" class="card card-pack">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-pack">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8qkrLdNBuWHrnjuqJmFWZCeIwWaog33E_YQ&usqp=CAU"
              alt
            />
            <div class="img-pack-details"></div>
            <div class="img-pack-info">
              <div class="row">
                <div class="col-lg-3">
                  <img src="https://www.freeiconspng.com/uploads/price-icon-18.png" />
                </div>
                <div class="col-lg-2 text-center">
                  <div style="padding-top: 100%;">
                    <p>2,400</p>
                  </div>
                </div>
                <div class="col-lg-7 text-center">
                  <h6>Recetas en base a Pollo</h6>
                  <p>Por Jaime Sepulveda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h5 class="card-text text-center">Recetas en base a Pollo</h5>
          <p
            class="card-text text-center"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>