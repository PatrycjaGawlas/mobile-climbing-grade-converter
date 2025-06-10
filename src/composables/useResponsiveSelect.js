import { onMounted, onUnmounted, ref } from "vue";

export function useResponsiveSelect() {
    const selectInterface = ref('popup');

    const setSelectInterface = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 768) {
            selectInterface.value = 'alert'
        } else {
            selectInterface.value = 'action-sheet'
        }
    }

    const handleResize = () => {
        setSelectInterface()
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })

    return {
        selectInterface
    }
}