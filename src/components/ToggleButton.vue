<template>
    <div class="toggle">
        <div 
            class="toggle__element toggle__element--left"
            :class="{'toggle__element--selected': props.gradeType === 'sport'}"
            @click="selectGradeType('sport')">SPORT</div>
        <div 
            class="toggle__element toggle__element--right"
            :class="{'toggle__element--selected': props.gradeType === 'boulder'}"
            @click="selectGradeType('boulder')">BOULDER</div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['gradeType'])
    const emit = defineEmits(['update-grade-type'])

    function selectGradeType(type: string): void {
        emit('update-grade-type', type);
    }

</script>

<style scoped lang="scss">
    .toggle {
        width: 100%;
        height: 91px;
        display: flex;
        border-radius: 15px;
        &__element {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            background: rgba(254, 216, 185, .35);
            &--left {
                border-radius: 15px 0 0 15px;
            }
            &--right {
                border-radius:  0 15px 15px 0;
            }
            &--selected {
                background: #F3B481;
            }
        }
    }
</style>