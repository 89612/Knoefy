import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationButton, TitleBlock, WhiteBackground } from "../utils/objects";

import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

// This is a template for creating new pages
export default function template() {
    return <StyledView className="flex-1 items-center justify-center w-100 h-100">
        <StyledText className="w-100 text-white">
            Try editing me! 🎉
        </StyledText>
    </StyledView>
}
