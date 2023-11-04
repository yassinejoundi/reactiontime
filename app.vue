<template>
  <div>
    <StartScreen v-if="currentScreen === 'StartScreen'" @click="startTest" />
    <WaitScreen v-if="currentScreen === 'WaitScreen'" />
    <ClickScreen v-if="currentScreen === 'ClickScreen'" @click="handleClick" />
    <ResultScreen
      v-if="currentScreen === 'ResultScreen'"
      :roundDuration="roundDuration"
      @click="startNextRound"
    />
    <FinalScreen
      v-if="currentScreen === 'FinalScreen'"
      :averageReactionTime="averageReactionTime"
      @click="restartTest"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"

let currentScreen = ref("StartScreen")
let round = ref(0)
let reactionTimes = ref([])
let roundDuration = ref(0)
let averageReactionTime = ref("")
let timerStart = 0

const getRandomWaitDuration = () => {
  return Math.floor(Math.random() * (8000 - 2000) + 2000) // Random duration between 2s and 10s.
}

const startTest = () => {
  if (currentScreen.value === "StartScreen") {
    currentScreen.value = "WaitScreen"
    const waitDuration = getRandomWaitDuration()
    let startTimestamp = null

    const wait = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp

      if (timestamp - startTimestamp < waitDuration) {
        requestAnimationFrame(wait)
      } else {
        currentScreen.value = "ClickScreen"
        timerStart = Date.now()
      }
    }

    requestAnimationFrame(wait)
  }
}

const handleClick = () => {
  if (currentScreen.value === "ClickScreen") {
    roundDuration = Date.now() - timerStart
    reactionTimes.value.push(roundDuration)
    if (round.value < 4) {
      round.value++
      showResultScreen()
    } else {
      showFinalScreen()
    }
  }
}

const showResultScreen = () => {
  currentScreen.value = "ResultScreen"
  // No automatic transition to the next round here.
}

const startNextRound = () => {
  currentScreen.value = "StartScreen"
  startTest() // Start the next round.
}

const showFinalScreen = () => {
  averageReactionTime =
    reactionTimes.value.reduce((a, b) => a + b, 0) / reactionTimes.value.length
  averageReactionTime = averageReactionTime.toFixed(0)
  currentScreen.value = "FinalScreen"
}

const restartTest = () => {
  currentScreen.value = "StartScreen"
  round.value = 0
  reactionTimes.value = []
}
</script>
