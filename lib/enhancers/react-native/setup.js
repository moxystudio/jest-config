/* eslint-env jest */

'use strict';

// Fixes warning for "Animated: useNativeDriver is not supported because the native animated module is missing..."
// See: https://github.com/ptomasroos/react-native-scrollable-tab-view/issues/642#issuecomment-593166721
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
