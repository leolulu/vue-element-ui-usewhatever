<template>
    <div>
        <el-from>
            <el-form-item>
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="post">立即创建</el-button>
            </el-form-item>
        </el-from>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    id:'',
                    name:'',
                }
            }
        },
        methods: {
            post() {
                console.log('点击post')
            }
        },
    }
</script>

<style scoped>
    div{
        height: 100%;
    }
</style>