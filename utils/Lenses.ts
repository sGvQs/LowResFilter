import { ImportedImageSizeType } from './types/ImportedImageSizeType';
import { LensesConfigType } from './types/LensesConfigType';
import { LensesType } from './types/LensesType';

export const Lenses = (
  pickedFilter: LensesType,
  imageSize: ImportedImageSizeType
): LensesConfigType => {
  switch (pickedFilter) {
    case LensesType.filter_1960s:
      return {
        name: LensesType.filter_1960s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_1970s:
      return {
        name: LensesType.filter_1970s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_1980s:
      return {
        name: LensesType.filter_1980s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_1990s:
      return {
        name: LensesType.filter_1990s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_2000s:
      return {
        name: LensesType.filter_2000s,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_iphone:
      return {
        name: LensesType.filter_iphone,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_iphone_3G:
      return {
        name: LensesType.filter_iphone_3G,
        width: imageSize.width * 0.1,
        compress: 0.1,
        isDefault: false,
      };
    case LensesType.filter_none:
      return {
        name: LensesType.filter_none,
        width: imageSize.width * 0,
        compress: 0,
        isDefault: true,
      };
  }
};
