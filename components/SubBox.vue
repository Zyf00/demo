<template>
	<uni-popup ref="popup" type="top">
		<view class="" :style="{background: '#fff'}">
			1111
		</view>
	</uni-popup>
</template>

<script lang="ts" setup>
	import { computed, ref, onMounted, defineComponent,	getCurrentInstance } from "vue"
	let refs = null
	const popup = ref()
	onMounted(() => {
		refs = getCurrentInstance().refs;
		console.log('refs',refs);
	})
	const openPopup = () => {
		console.log('打开')
		console.log('--refs.popup',refs.popup);
		refs.popup.open()
	};
	defineExpose({
		openPopup
	})
</script>

<style>

</style>