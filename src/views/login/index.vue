<script setup>
import {useUserStore} from '@/stores/user'

const user = useUserStore()
</script>
<template>
  <div v-if="!user.isLogin" class=" bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col">
    <div class=" my-auto">
      <form class="form-signin">
        <h2 class="form-signin-heading text-xl pt-4">请登录</h2>
        <div class="flex flex-col gap-3">
          <t-input type="text" name="username" placeholder="Email Address" required="" autofocus="" />
          <t-input type="password" name="password" placeholder="Password" required=""/>
        </div>
        <div class="flex flex-row items-center justify-between mt-4">
          <div><label class="checkbox">
            <!-- <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me -->
          </label></div>
          <t-button class="btn btn-lg btn-primary btn-block" type="submit" @click="user.login">Login</t-button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
body {
	background: #eee !important;
}

.wrapper {
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}

</style>