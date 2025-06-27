"use client"
interface PropType {
    original:string;
    translation:string;
}
export default function WordCard(modelValue:PropType) {
    return (
        <div className="group w-fit mt-[10px] mr-[10px] rounded-md border border-gray-200 p-[10px] cursor-pointer">
            <div>{modelValue.original}</div>
            <div className="hidden group-hover:block">
                {modelValue.translation}
            </div>
        </div>
    )
}
