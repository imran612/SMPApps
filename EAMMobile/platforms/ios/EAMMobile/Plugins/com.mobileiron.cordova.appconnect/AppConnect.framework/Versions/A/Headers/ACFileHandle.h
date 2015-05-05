//
//  ACFileHandle.h
//  Subclass of NSFileHandle adding AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>
#import "ACError.h"

@interface ACFileHandle : NSFileHandle {
@private
    int fd;
    int type;
}

+ (id)fileHandleForReadingAtPath:(NSString *)path;
+ (id)fileHandleForReadingAtPath:(NSString *)path error:(NSError *__autoreleasing *)error;
+ (id)fileHandleForReadingFromURL:(NSURL *)url error:(NSError *__autoreleasing *)error;
+ (id)fileHandleForUpdatingAtPath:(NSString *)path;
+ (id)fileHandleForUpdatingAtPath:(NSString *)path error:(NSError *__autoreleasing *)error;
+ (id)fileHandleForUpdatingURL:(NSURL *)url error:(NSError *__autoreleasing *)error;
+ (id)fileHandleForWritingAtPath:(NSString *)path;
+ (id)fileHandleForWritingAtPath:(NSString *)path error:(NSError *__autoreleasing *)error;
+ (id)fileHandleForWritingToURL:(NSURL *)url error:(NSError *__autoreleasing *)error;

- (NSData *)availableData;
- (NSData *)availableDataWithError:(NSError *__autoreleasing *)error;

- (NSData *)readDataToEndOfFile;
- (NSData *)readDataToEndOfFileWithError:(NSError *__autoreleasing *)error;
- (NSData *)readDataOfLength:(NSUInteger)length;
- (NSData *)readDataOfLength:(NSUInteger)length error:(NSError *__autoreleasing *)error;

- (void)writeData:(NSData *)data;
- (void)writeData:(NSData *)data error:(NSError *__autoreleasing *)error;

- (unsigned long long)offsetInFile;
- (unsigned long long)seekToEndOfFile;
- (void)seekToFileOffset:(unsigned long long)offset;

- (void)truncateFileAtOffset:(unsigned long long)offset;
- (void)synchronizeFile;
- (void)closeFile;

@end

