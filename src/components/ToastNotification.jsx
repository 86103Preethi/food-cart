import { Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

export function ToastNotification({ successAlert, failureAlert }) {
  return (
    <div className="absolute top-0 right-0 transform -translate-x-1/2 z-50 flex flex-col gap-4 p-4">
      {/* Success Toast */}
      {successAlert && (
        <Toast>
          <div className="inline-flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal mr-3">{successAlert}</div>
          <Toast.Toggle />
        </Toast>
      )}

      {/* Failure Toast */}
      {failureAlert && (
        <Toast>
          <div className="inline-flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal mr-3">{failureAlert}</div>
          <Toast.Toggle />
        </Toast>
      )}
    </div>
  );
}
