//
//  NSKeyedUnarchiver+ACSecureFile.h
//  Category of NSKeyedUnarchiver adding AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>
#import "ACError.h"

@interface NSKeyedUnarchiver (ACSecureFile)

+ (id)unarchiveObjectWithSecureFile:(NSString *)path error:(NSError *__autoreleasing*)error;

@end
