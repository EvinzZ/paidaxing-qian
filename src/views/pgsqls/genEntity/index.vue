<template>
  <el-main>
    <el-col :span="18" :offset="3">
      <el-form :model="sqlForm" label-width="140px">
        <el-form-item label="生成类型">
          <el-select v-model="sqlForm.opsClient" placeholder="请选择生成类型">
            <el-option label="Java" value="Java" />
            <el-option label="C++" value="Cpp" />
            <el-option label="Python" value="Python" />
          </el-select>
        </el-form-item>
        <el-form-item label="SQL创建语句(DDL)">
          <el-input
              v-model="sqlForm.ddlSql"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 25}"
              placeholder="请输入SQL语句"
          />
          <div style="margin: 20px 0"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">生成</el-button>
          <el-button>清空</el-button>
        </el-form-item>
        <el-form-item label="实体">
          <el-input
              v-model="sqlForm.insertSql"
              type="textarea"
              autosize
              readonly
          />
        </el-form-item>
      </el-form>
    </el-col>
  </el-main>
</template>

<script setup>
import {ddlGenEntity} from "@/api/pgsqls";

const loading = ref(false);
// do not use same name with ref
const sqlForm = ref({
  ddlSql: '',
  insertSql: '',
  opsClient: '',
})

const onSubmit = () => {
  loading.value = true;
  const ddlSql = sqlForm.value.ddlSql;
  const opsClient = sqlForm.value.opsClient;
  const data = {
    'ddlSql': ddlSql,
    'opsClient': opsClient,
  }
  ddlGenEntity(data).then(res => {
    sqlForm.value.insertSql = res.data;
  }).catch(() => {
    loading.value = false;
  });
}
</script>

<style scoped>

</style>