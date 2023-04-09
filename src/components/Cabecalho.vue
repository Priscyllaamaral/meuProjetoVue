/**  Comentário para fazer commit 2.1 */

<template>

                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            <RouterLink :to="{name: 'pedidos'}" >
                                <img alt="Vue logo" class="logo img-responsive" src="@/assets/logo2.png" width= "24" height="24" />
                            </RouterLink>
                            </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#"><RouterLink :to="{name: 'about'}" >Home</RouterLink></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><RouterLink :to="{name: 'pedidos'}" >Pedidos</RouterLink></a>
                    </li>
                
                </ul>
            

                

        





</template>

<style>

.logo{
    width: 30px;
}

</style>