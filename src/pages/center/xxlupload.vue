<template>
  <div class="upload-file-box">
    <div class="input-line">
      <div class="input-title">
        <span class="name">附件上传：</span>
      </div>
      <label v-if="loading">
        <div class="ban-button icon-btn">
          <span>附件上传</span>
        </div>
      </label>
      <label for="files" v-else>
        <div class="upload-btn icon-btn">
          <span>附件上传</span>
        </div>
      </label>
      <input type="file" @change="changeFiles" class="files" id="files" />
    </div>
    <div class="limit-info">
      支持文件格式：常用文件格式，单个文件不能超过5Mb
    </div>
    <div class="input-line" v-show="loading">
      <div class="input-title">
        <span class="name">上传状态：</span>
      </div>
      <div class="loading-box">
        <div class="current-loading" :style="{ width: percent + '%' }"></div>
      </div>
      <div class="percent-val">{{ Math.round(percent) }}%</div>
      <div class="cancel-btn" @click="cancelUpload">取消</div>
    </div>

    <div class="file-state" v-show="loading">
      <div class="file-name">
        <span>{{ originalName }}</span>
      </div>
      <div class="state">
        <span>正在上传</span>
      </div>
    </div>

    <div class="file-state" v-show="complete">
      <div class="file-name">
        <a :href="filePath" target="_blank">{{ originalName }}</a>
      </div>
      <div class="state" v-show="!!filePath">
        <span>已完成</span>
      </div>
    </div>
  </div>
</template>

<script>
import { upload } from "./service.js";
import axios from "axios";
export default {
  data() {
    return {
      source: null,
      fileName: "",
      percent: 0,
      originalName: "",
      uploadState: false,
      filePath: "",
      loading: false,
      complete: false,
    };
  },
  methods: {
    init() {
      let payload = "";
      let cancelToken = "";
      let cd = (progressEvent) => {
        let completeVal =
          (progressEvent.loaded / progressEvent.total) * 100 || 0;
        this.percent = completeVal;
        this.uploadState = false;
      };
      // imgupload((payload,cancelToken, cd).then(res=>{

      // })
    },
    changeFiles(e) {
      console.log(e);
      let files = e.srcElement.files;
      if (files && files.length) {
        if (files[0].size / 1024 / 1024 > 5) {
          alert("单个文件不能超过5MB");
          document.getElementById("files").value = null;
          return;
        }
        this.originalName = files[0].name;
        this.source = axios.CancelToken.source();
        console.log("this.source", this.source);
        let formData = new FormData();
        formData.append("file", files[0]);
        this.loading = true;
        this.complete = false;

        upload
          .uploadFile(
            "TONGLI/WPictureUpload",
            formData,
            this.source.token,
            (progressEvent) => {
              let completeVal =
                (progressEvent.loaded / progressEvent.total) * 100 || 0;
              this.percent = completeVal;
              this.uploadState = false;
            }
          )
          .then((res) => {
            if (res.data.status) {
              this.percent = 100;
              this.uploadState = true;
              this.filePath = res.data.resultBody.filePath;
              this.loading = false;
              this.complete = true;
            } else {
              alert("上传失败");
              this.loading = false;
              this.complete = false;
            }
          })
          .catch((thrown) => {
            if (axios.isCancel(thrown)) {
              alert("用户取消上传");
              this.loading = false;
              this.complete = false;
            } else {
              alert("其它错误异常");
            }
          });
      }
      document.getElementById("files").value = null;
    },
    cancelUpload() {
      //取消上传
      this.source.cancel("Operation canceled by the user.");
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-file-box {
  padding-top: 30px;
  padding-left: 20px;
  .input-line {
    height: 40px;

    .input-title {
      float: left;
      line-height: 40px;
      font-size: 14px;
      text-align: right;
      width: 80px;

      .text {
        color: #666;
      }
    }

    .files {
      display: none;
    }

    .input {
      float: left;
      width: 400px;
      margin-left: 16px;
    }

    .icon-btn {
      margin-top: 5px;
      margin-left: 16px;
      float: left;
      height: 30px;
      line-height: 30px;
      padding-right: 10px;
      padding-left: 10px;
      background-color: #0099ff;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.35s;
    }

    .upload-btn {
      &:hover {
        opacity: 0.8;
      }
    }

    .ban-button {
      cursor: not-allowed;
      background-color: #eeeff3;
    }

    .loading-box {
      margin-top: 15px;
      float: left;
      width: 270px;
      height: 10px;
      background-color: #f6f6f6;
      border-radius: 5px;
      margin-left: 15px;

      .current-loading {
        height: 10px;
        border-radius: 5px;
        background-color: #3399cc;
        /*width: 50%;*/
      }
    }

    .percent-val {
      line-height: 40px;
      width: 60px;
      text-align: center;
      font-size: 14px;
      color: #666;
      float: left;
    }

    .cancel-btn {
      line-height: 40px;
      font-size: 14px;
      color: #999;
      text-decoration: underline;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: #3399cc;
      }
    }

    .del-btn {
      line-height: 40px;
      font-size: 14px;
      color: #999;
      text-decoration: underline;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: #3399cc;
      }
    }
  }

  .limit-info {
    color: #999;
    font-size: 14px;
    padding-left: 96px;
    line-height: 34px;
    height: 34px;
  }

  .file-state {
    width: 270px;
    margin-left: 95px;
    overflow: hidden;

    .file-name {
      float: left;
      width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: #999;

      a {
        color: #999;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          color: #3399cc;
        }
      }
    }

    .state {
      float: right;
      font-size: 14px;
      color: #1db396;
    }
  }
}
</style>
