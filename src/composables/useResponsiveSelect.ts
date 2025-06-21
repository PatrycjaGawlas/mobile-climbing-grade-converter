import { onMounted, onUnmounted, ref, Ref } from "vue";
import type { SelectInterface } from "@ionic/core/dist/types/components/select/select-interface";

export function useResponsiveSelect(): {
    selectInterface: Ref<SelectInterface>;
  } {
    const selectInterface: Ref<SelectInterface> = ref('popover');

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