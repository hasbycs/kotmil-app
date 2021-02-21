<template>
  <div>
    <h4 class="px-8 py-8 text-center text-lg md:text-2xl">
      <b>Data Warga Terdampak Covid-19</b>
    </h4>
    <form
      class="block max-w-3xl mx-auto"
      @keydown.enter.prevent="() => {}"
      @submit.prevent="beforeSubmit"
    >
      <div class="mb-4">
        <label class="input-label" for="name">
          Nama
        </label>
        <input
          v-model="data.name"
          name="name"
          autocomplete="name"
          class="input-text"
          placeholder="Masukkan nama Anda"
          v-on="inputListeners"
        >
        <p
          v-if="hasError('name')"
          class="mt-2 text-red-500"
        >
          {{ getErrorMessage('name') }}
        </p>
      </div>
      <div class="md:-mx-4 mb-4 flex flex-col md:flex-row md:items-stretch">
        <div class="md:w-1/2 md:mx-4 mb-4 md:mb-0">
          <label class="input-label" for="nik">
            NIK
          </label>
          <input
            v-model="data.nik"
            name="nik"
            autocomplete="nik"
            class="input-text"
            placeholder="Masukkan Nik Anda"
            v-on="inputListeners"
            @keypress="numberOnly($event)"
          >
          <p
            v-if="hasError('nik')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('nik') }}
          </p>
        </div>
        <div class="md:w-1/2 md:mx-4">
          <label class="input-label" for="kk">
            Nomor Kartu Keluarga
          </label>
          <input
            v-model="data.kk"
            name="kk"
            autocomplete="kk"
            class="input-text"
            placeholder="Masukkan no Kartu Keluarga"
            v-on="inputListeners"
            @keypress="numberOnly($event)"
          >
          <p
            v-if="hasError('kk')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('kk') }}
          </p>
        </div>
      </div>
      <div class="md:-mx-4 mb-4 flex flex-col md:flex-row md:items-stretch">
        <div class="md:w-1/2 md:mx-4 mb-4 md:mb-0">
          <label class="input-label" for="type">
            Foto KTP
          </label>
          <div class="relative">
            <button
              type="button"
              class="border rounded-lg px-4 text-sm py-1 mr-2"
              :class="[data.ktpFile ? 'border-green-400 text-green-600' : 'border-red-400 text-red-600']"
              @click.prevent="uploadKtp()"
            >
              <FontAwesomeIcon v-if="data.ktpFile" class="inline-block mr-2 text-green-600" :icon="icons.faCheckCircle" />
              <FontAwesomeIcon v-else class="inline-block mr-2 text-red-600" :icon="icons.faFileUpload" />
              Upload Ktp
            </button>
          </div>
          <p class="ml-1 mt-1" style="font-size:70%">
            (Maksimal 2MB, format JPG/JPEG/PNG/BMP)
          </p>
          <p v-if="showKtpError" class="text-red-500">
            Dokumen harus diunggah
          </p>
        </div>
        <div class="md:w-1/2 md:mx-4">
          <label class="input-label" for="type">
            Foto Kartu Keluarga
          </label>
          <div class="relative">
            <button
              type="button"
              class="border rounded-lg px-4 text-sm py-1 mr-2"
              :class="[data.kkFile ? 'border-green-400 text-green-600' : 'border-red-400 text-red-600']"
              @click.prevent="uploadKk()"
            >
              <FontAwesomeIcon v-if="data.kkFile" class="inline-block mr-2 text-green-600" :icon="icons.faCheckCircle" />
              <FontAwesomeIcon v-else class="inline-block mr-2 text-red-600" :icon="icons.faFileUpload" />
              Upload Kartu Keluarga
            </button>
          </div>
          <p class="ml-1 mt-1" style="font-size:70%">
            (Maksimal 2MB, format JPG/JPEG/PNG/BMP)
          </p>
          <p v-if="showKkError" class="text-red-500">
            Dokumen harus diunggah
          </p>
        </div>
      </div>
      <div class="md:-mx-4 mb-4 flex flex-col md:flex-row md:items-stretch">
        <div class="md:w-1/2 md:mx-4 mb-4 md:mb-0">
          <label class="input-label" for="umur">
            Umur
          </label>
          <input
            v-model="data.umur"
            name="umur"
            type="number"
            min="25"
            autocomplete="umur"
            class="input-text"
            placeholder="Masukkan Umur Anda"
            v-on="inputListeners"
            @change="checkUmur"
          >
          <p class="ml-1 mt-1" style="font-size:70%">
            Berumur lebih dari atau sama dengan 25 tahun
          </p>
          <p
            v-if="hasError('umur')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('umur') }}
          </p>
        </div>
        <div class="md:w-1/2 md:mx-4">
          <label class="input-label" for="jenisKelamin">
            Jenis Kelamin
          </label>
          <select
            v-model="data.jenisKelamin"
            name="jenisKelamin"
            class="input-text cursor-pointer bg-white"
          >
            <option value="L">
              Laki-Laki
            </option>
            <option value="P">
              Perempuan
            </option>
          </select>
        </div>
      </div>
      <div class="mb-4">
        <label class="input-label" for="alamat">
          Alamat
        </label>
        <textarea
          v-model="data.alamat"
          rows="5"
          name="alamat"
          autocomplete="alamat"
          class="input-text"
          placeholder="Masukkan alamat Anda"
          v-on="inputListeners"
          @input="checkLength"
        />
        <p class="ml-1 mt-1" style="font-size:70%">
          Tidak lebih panjang dari 255 karakter
        </p>
        <p
          v-if="hasError('alamat')"
          class="mt-2 text-red-500"
        >
          {{ getErrorMessage('alamat') }}
        </p>
      </div>
      <div class="md:-mx-4 mb-4 flex flex-col md:flex-row md:items-stretch">
        <div class="md:w-1/2 md:mx-4 mb-4 md:mb-0">
          <label class="input-label" for="rt">
            RT
          </label>
          <input
            v-model="data.rt"
            name="rt"
            autocomplete="rt"
            class="input-text"
            placeholder="Masukkan RT Anda"
            v-on="inputListeners"
          >
          <p
            v-if="hasError('rt')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('rt') }}
          </p>
        </div>
        <div class="md:w-1/2 md:mx-4">
          <label class="input-label" for="rw">
            RW
          </label>
          <input
            v-model="data.rw"
            name="rw"
            autocomplete="rw"
            class="input-text"
            placeholder="Masukkan RW Anda"
            v-on="inputListeners"
          >
          <p
            v-if="hasError('rw')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('rw') }}
          </p>
        </div>
      </div>
      <div class="md:-mx-4 mb-4 flex flex-col md:flex-row md:items-stretch">
        <div class="md:w-1/2 md:mx-4 mb-4 md:mb-0">
          <label class="input-label" for="psbp">
            Penghasilan sebelum pandemi
          </label>
          <input
            v-model="data.psbp"
            name="psbp"
            autocomplete="psbp"
            class="input-text"
            placeholder="Masukkan angka penghasilan"
            v-on="inputListeners"
            @keypress="numberOnly($event)"
          >
          <p
            v-if="hasError('psbp')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('psbp') }}
          </p>
        </div>
        <div class="md:w-1/2 md:mx-4">
          <label class="input-label" for="pstp">
            Penghasilan setelah pandemi
          </label>
          <input
            v-model="data.pstp"
            name="pstp"
            autocomplete="pstp"
            class="input-text"
            placeholder="Masukkan angka penghasilan"
            v-on="inputListeners"
            @keypress="numberOnly($event)"
          >
          <p
            v-if="hasError('pstp')"
            class="mt-2 text-red-500"
          >
            {{ getErrorMessage('pstp') }}
          </p>
        </div>
      </div>
      <div class="mb-4">
        <label class="input-label" for="alasan">
          Alasan membutuhkan bantuan
        </label>
        <p v-for="(item, i) in reasonChoices" :key="i">
          <input
            v-model="data.alasan"
            name="alasan"
            type="radio"
            :value="item.value"
            @change="lain=false"
            v-on="inputListeners"
          >
          <label for="alasan">{{ item.text }}</label><br>
        </p>
        <input
          v-model="lain"
          type="radio"
          :value="true"
          @change="data.alasan = null"
        >
        <label for="alasan">Lainnya</label>
        <input
          v-if="lain"
          v-model="data.alasan"
          name="alasan"
          autocomplete="alasan"
          class="input-text"
          placeholder="Masukkan alasan Anda"
          v-on="inputListeners"
        >
        <p
          v-if="hasError('alasan')"
          class="mt-2 text-red-500"
        >
          {{ getErrorMessage('alasan') }}
        </p>
      </div>
      <hr class="mb-2">
      <input
        v-model="data.accept"
        name="accept"
        type="checkbox"
      >
      <label for="accept" class="ml-2">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</label>
      <br>
      <button
        type="submit"
        class="text-white rounded-lg px-6 py-2 mt-3"
        :class="[hasAtLeastOneError || !completeFiles || !data.accept ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-green']"
        :disabled="hasAtLeastOneError || !completeFiles || !data.accept"
      >
        Simpan
      </button>
    </form>
  </div>
</template>

<script>
import { faCheckCircle, faTrash, faFileDownload, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

const emptyData = {
  name: null,
  nik: null,
  kk: null,
  umur: null,
  jenisKelamin: 'L',
  alamat: null,
  rt: null,
  rw: null,
  psbp: null,
  pstp: null,
  alasan: null,
  ktpFile: null,
  kkFile: null,
  accept: false
}

export default {
  data () {
    return {
      showDocumentError: false,
      isMounted: false,
      icons: {
        faCheckCircle,
        faTrash,
        faFileDownload,
        faFileUpload
      },
      errors: {},
      messages: {
        name: 'Nama harus diisi',
        nik: 'NIK harus di isi',
        kk: 'No KK harus di isi',
        umur: 'Umur harus di isi',
        jenisKelamin: 'Jenis kelamin harus di isi',
        alamat: 'Alamat harus di isi',
        rt: 'RT harus di isi',
        rw: 'RW harus di isi',
        psbp: 'penghasilan harus di isi',
        pstp: 'penghasilan harus di isi',
        alasan: 'Alasan harus di isi'
      },
      data: JSON.parse(JSON.stringify(emptyData)),
      showKtpError: false,
      showKkError: false,
      reasonChoices: [
        {
          text: 'Kehilangan pekerjaan',
          value: 1
        },
        {
          text: 'Kepala keluarga terdampak atau korban Covid',
          value: 2
        },
        {
          text: 'Tergolong fakir/miskin semenjak sebelum Covid',
          value: 3
        }
      ],
      lain: null
    }
  },
  computed: {
    hasAtLeastOneError () {
      return Object.keys(this.errors).some((key) => {
        return !!this.errors[key]
      })
    },
    inputListeners () {
      return {
        input: (e) => {
          this.validate(e.target.name)
        },
        blur: (e) => {
          this.validate(e.target.name)
        }
      }
    },
    completeFiles () {
      return (this.data.ktpFile && this.data.kkFile)
    }
  },
  watch: {
  },
  mounted () {
    this.$nextTick(() => {
      this.isMounted = true
    })
  },
  methods: {
    beforeSubmit () {
      if (!this.data.kkFile) {
        this.showKkError = true
      }
      if (!this.data.ktpFile) {
        this.showKtpError = true
      }
      this.clearAllErrorMessages()
      const keys = Object.keys(this.data)
      for (const key of keys) {
        this.validate(key)
      }
      if (this.hasAtLeastOneError || !this.data.accept) {
        return
      }
      this.onSubmit()
    },
    onSubmit () {
      const executionTime = Math.floor(Math.random() * 3000)
      console.log('Data Form', this.data)
      console.log('waktu eksekusi', executionTime + ' milisekon')
      Swal.fire({
        title: 'Menyimpan data...',
        willOpen: () => Swal.showLoading()
      })
      try {
        if (executionTime <= 1500) {
          Swal.fire({
            title: 'Data berhasil disimpan',
            icon: 'success'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops..coba sesaat lagi',
            text: 'server load yang terlalu tinggi'
          })
        }
      } catch (e) {
        if (e) {
          Swal.fire({
            icon: 'error',
            title: 'Oops..coba sesaat lagi',
            text: 'server load yang terlalu tinggi'
          })
        }
      }
      // Swal.fire({
      //   title: 'Menyimpan data...',
      //   onBeforeOpen: () => Swal.showLoading()
      // })
      // this.$refs.invisibleRecaptcha.execute()
    },
    onRecaptchaError () {
      console.log('recaptcha error')
    },
    onRecaptchaExpired () {
      console.log('recaptcha expired')
    },
    validate (field) {
      if (field === 'statement_letter_url') {
        return
      }
      if (this.data[field]) {
        this.setErrorMessage(field, null)
      } else {
        this.setErrorMessage(field, this.messages[field])
      }
    },
    hasError (field) {
      return !!this.errors[field]
    },
    getErrorMessage (field) {
      return this.errors[field]
    },
    setErrorMessage (field, msg) {
      this.$set(this.errors, field, msg)
    },
    clearErrorMessage (field) {
      this.$set(this.errors, field, null)
    },
    clearAllErrorMessages () {
      Object.keys(this.errors).forEach((key) => {
        this.setErrorMessage(key, null)
      })
    },
    uploadKtp () {
      this.showKtpError = false
      const fileInput = document.createElement('input')
      fileInput.setAttribute('type', 'file')
      fileInput.setAttribute('name', 'ktp')
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length) {
          if (!this.fileCheck(e.target.files[0])) {
            this.data.ktpFile = null
            return false
          } else {
            this.data.ktpFile = e.target.files[0]
          }
        }
      })
      fileInput.click()
    },
    uploadKk () {
      this.showKkError = false
      const fileInput = document.createElement('input')
      fileInput.setAttribute('type', 'file')
      fileInput.setAttribute('name', 'kk')
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length) {
          if (!this.fileCheck(e.target.files[0])) {
            this.data.kkFile = null
            return false
          } else {
            this.data.kkFile = e.target.files[0]
          }
        }
      })
      fileInput.click()
    },
    fileCheck (file) {
      let sizeValid = false
      if (file.size < 2097153) {
        sizeValid = true
      }
      const _validFileExtensions = ['.jpg', '.jpeg', '.bmp', '.png']
      let blnValid = false
      for (let j = 0; j < _validFileExtensions.length; j++) {
        const sCurExtension = _validFileExtensions[j]
        if (file.name.substr(file.name.length - sCurExtension.length, sCurExtension.length).toLowerCase() === sCurExtension.toLowerCase()) {
          blnValid = true
          break
        }
      }
      if (!blnValid) {
        alert('Maaf, ' + file.name + ' tidak valid, ekstensi yang diizinkan adalah: ' + _validFileExtensions.join(', '))
        return false
      }
      if (!sizeValid) {
        alert('Maaf, ' + file.name + ' ukurannya melebihi 2MB')
        return false
      }
      return true
    },
    checkLength (e) {
      const addressLength = e.target.value.length
      const maxLength = 255
      if (addressLength === maxLength) {
        e.preventDefault()
      } else if (addressLength > maxLength) {
        this.data.alamat = this.data.alamat.substring(0, maxLength)
      }
    },
    numberOnly (e) {
      const key = e.keyCode ? e.keyCode : e.which
      if (isNaN(String.fromCharCode(key)) && key !== 8 && key !== 46 && key !== 37 && key !== 39) {
        e.preventDefault()
        return false
      }
    },
    checkUmur (e) {
      if (e.target.value < 25) {
        this.data.umur = null
        alert('umur anda belum mencucukupi')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-label {
  @apply font-bold text-gray-700 leading-loose;
}
.input-text {
  appearance: none;
  @apply w-full min-w-0 px-4 py-2 rounded
  border border-solid border-gray-300;
}
.logistic-selected {
  @apply border border-green-200 rounded mb-2 pt-2 pb-2 px-4 text-sm;
  &.border-red-200 {
    @apply border border-red-200 rounded mb-2 pt-2 pb-2 px-4 text-sm text-red-400;
  }
}
.quantity-logistic {
  width: 75px;
  @apply outline-none bg-gray-200 px-2 text-center;
}
.autocomplete-data {
  position: absolute;
  top: 45px;
  left: 0px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
}
</style>
