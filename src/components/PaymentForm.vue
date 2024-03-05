<template>
  <div class="grid place-items-center h-[40rem]">
    <Vueform class="w-1/3">
      <TextElement name="text" label="Name" />
      <TextElement
        name="number"
        input-type="number"
        :rules="['nullable', 'numeric']"
        autocomplete="off"
        label="Card Number"
      />
      <DateElement
        name="date"
        :columns="{
          container: 9,
        }"
        label="Expiration date"
        display-format="MM-YYYY"
        value-format="MM-YYYY"
        load-format="MM-YYYY"
      />
      <TextElement
        name="text_1"
        label="CVS"
        :columns="{
          container: 3,
        }"
      />
      <ButtonElement
        name="submit"
        button-label="Submit"
        :submits="true"
        align="right"
      />
    </Vueform>
  </div>
</template>
