//
//  ACSecureFile.h
//  AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#ifndef ACSecureFile_h
#define ACSecureFile_h

// POSIX style secure file operations.
//
// AppConnect ensures that all file contents written by these functions is encrypted, and file contents read by these
// functions is decrypted. All file read and write operations must occur through AppConnect secure file functions. Using
// any other file write functions will corrupt the files irreparably. Using any other file read functions will return
// encrypted data, making the data appear corrupted.
//
// These operations only work on regular files. Named pipes, character specials, directories, block specials, symbolic
// links and pipes are not supported.
//
// If secure services are unavailable, each of these functions will fail, set errno to EACCES, and set
// ACSecureFileLastError to ACE_NO_KEYS_ERROR. See the -appConnect:secureFileIOPolicyChangedTo: message and the
// secureServicesAvailability property in AppConnect.h, and see ACSecureFileLastError() in ACError.h
//
// If the encryption keys are incorrect or the file has become corrupt, each of these functions will fail, set errno to
// EIO, and set ACSecureFileLastError to ACE_BAD_KEY_OR_CORRUPT_DATA_ERROR. See ACSecureFileLastError() in ACError.h

int ACSecureFileOpen(const char *path, int oflag, ...);

ssize_t ACSecureFileWrite(int fd, const void *buf, size_t nbyte);
ssize_t ACSecureFileWritev(int fd, const struct iovec *iov, int iovcnt);
ssize_t ACSecureFilePwrite(int fd, const void *buf, size_t nbyte, off_t offset);

ssize_t ACSecureFileRead(int fd, const void *buf, size_t nbyte);
ssize_t ACSecureFileReadv(int fd, const struct iovec *iov, int iovcnt);
ssize_t ACSecureFilePread(int fd, const void *buf, size_t nbyte, off_t offset);

int ACSecureFtruncate(int fd, off_t length);
int ACSecureTruncate(const char *path, off_t length);

off_t ACSecureFileLseek(int fd, off_t offset, int whence);

int ACSecureFstat(int fd, struct stat *buf);
int ACSecureLstat(const char *restrict path, struct stat *restrict buf);

int ACSecureFileRename(const char *old, const char *new);

int ACSecureFileClose(int fd);

// ACSecureFileLastError : this function is not a part of the POSIX API but was added here to provide the library user
// with a more descriptive error signaling method. Since there is additional policy layered on top the POSIX API, this
// interface excuses for the shortcomings of using errno alone.
//
// The method takes a valid file descriptor and returns the last error seen during a prior secure file function call.
// The last error is only set for those functions that operate on an open and valid file descriptor.
int ACSecureFileLastError(int fd);

#endif
