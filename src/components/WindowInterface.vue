<template>
  <div class="window">
      <div v-if="error">{{ error }}</div>
      <div v-if="documents" class="messages" ref="messages">
          <div v-for="doc in formattedDocuments" :key="doc.id" class="single-documents">
              <span class="created-at">{{ doc.createdAt }}</span>
              <span class="name">{{ doc.name }}</span>
              <span class="message">{{ doc.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated } from 'vue'
import { ref } from 'vue'
export default {
    setup() {
        const { documents, error } = getCollection('messages')

        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc, createdAt: time}
                })
            }
        })
        const messages = ref(null)
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })
        
        return { documents, error, formattedDocuments, messages}
    }
}
</script>

<style>
.window {
    background: #fafafa;
    padding: 30px 20px;
}
.single-documents {
    margin: 18px 0;
}
.created-at {
    display: block;
    margin-bottom: 4px;
    color: #999;
    font-size: 12px;
}
.name {
    font-weight: bold;
    padding: 10px;
    margin-left: 6px;
}
.messages {
    overflow: auto;
    max-height: 400px;
}
</style>