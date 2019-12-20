import Vue from 'vue'

import MButton from '~/components/basics/button'
import MInput from '~/components/basics/input'
import MRadio from '~/components/basics/radio'
import MCheckbox from '~/components/basics/checkbox'
import MSelect from '~/components/basics/select'
import MTextarea from '~/components/basics/textarea'

Vue.mixin({
  components: {
    MButton,
    MInput,
    MRadio,
    MCheckbox,
    MSelect,
    MTextarea
  }
})