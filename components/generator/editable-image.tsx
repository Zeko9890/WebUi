"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { ImagePlus, Replace } from "lucide-react";

interface EditableImageProps {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  alt?: string;
}

export function EditableImage({ value, onChange, className, alt = "Editable image" }: EditableImageProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div 
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-[var(--canvas-radius)] border border-[var(--canvas-card-border)] bg-[var(--canvas-card-bg)] flex items-center justify-center transition-all",
        !value && "hover:border-[var(--canvas-primary)] hover:shadow-[0_0_15px_rgba(var(--canvas-primary-rgb),0.2)]",
        className
      )}
      onClick={() => inputRef.current?.click()}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {value ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={value} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
            <button 
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              title="Replace image"
            >
              <Replace className="size-5" />
            </button>
            <button 
              className="px-3 py-1.5 rounded-full bg-red-500/80 text-white text-sm font-medium hover:bg-red-500 transition-colors"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-[var(--canvas-fg)] opacity-50 group-hover:opacity-100 transition-opacity p-6 text-center">
          <ImagePlus className="size-10 mb-3" />
          <span className="text-sm font-medium">Click to upload image</span>
        </div>
      )}
    </div>
  );
}
