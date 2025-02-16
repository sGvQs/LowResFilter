import {
  filterType,
  importedImageSize,
  LensesConfig,
} from '@/app/(tabs)/photo';

export const Lenses = (
  pickedFilter: filterType,
  imageSize: importedImageSize
): LensesConfig => {
  switch (pickedFilter) {
    case filterType.filter_1960s:
      return {
        name: filterType.filter_1960s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_1970s:
      return {
        name: filterType.filter_1970s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_1980s:
      return {
        name: filterType.filter_1980s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_1990s:
      return {
        name: filterType.filter_1990s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_2000s:
      return {
        name: filterType.filter_2000s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_iphone:
      return {
        name: filterType.filter_iphone,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_iphone_3G:
      return {
        name: filterType.filter_iphone_3G,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case filterType.filter_none:
      return {
        name: filterType.filter_none,
        width: imageSize.width * 0,
        compress: 0,
        isDefault: true,
      };
  }
};
