<template>
	<div>dome</div>
	<uni-badge text="1"></uni-badge>
	<sub-box ref="subBoxRef"></sub-box>
	<div @click="handleBtn">btn</div>
</template>
<script lang="ts" setup>
	import SubBox from "@/components/SubBox.vue";
	import { ref, onMounted, reactive, getCurrentInstance } from 'vue';
	let subBoxRef = ref(null);
	onMounted(()=>{
	})
	const handleBtn = ()=>{
		console.log('subBoxRef',subBoxRef);
		const instance=subBoxRef.value
		console.log('点击')
		console.log('__refs_instance',instance);
		instance.openPopup()
	}
</script>
<!--
<script lang="ts" setup>
	import SubBox from "@/components/SubBox.vue";
	import { ref, onMounted, reactive, getCurrentInstance } from 'vue';
	let refs = null;
	onMounted(()=>{
		refs = getCurrentInstance().refs;
		console.log('getCurrentInstance', getCurrentInstance());
		console.log('domerefs', refs);
	})
	const handleBtn = ()=>{
		console.log('点击')
		console.log('__refs',refs.subBoxRef);
		refs.subBoxRef.openPopup()
	}
</script>
-->
<style>
</style>