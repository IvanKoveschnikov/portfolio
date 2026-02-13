import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileCode, Search, GitGraph, Menu, Play, X, Minus, Square, GitBranch } from 'lucide-react';

const CodeTerminal = () => {
  const [text, setText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  
  const codeLines = [
    "import 'package:flutter/material.dart';",
    "",
    "class PortfolioApp extends StatelessWidget {",
    "  const PortfolioApp({super.key});",
    "",
    "  @override",
    "  Widget build(BuildContext context) {",
    "    return MaterialApp(",
    "      title: 'Ivan Dev',",
    "      theme: ThemeData.dark(),",
    "      home: const Scaffod(",
    "        body: Center(",
    "          child: Text('Hello, World!'),",
    "        ),",
    "      ),",
    "    );",
    "  }",
    "}"
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout;

    const typeCode = () => {
      if (currentLine < codeLines.length) {
        const fullLine = codeLines[currentLine];
        
        if (currentChar < fullLine.length) {
          setText(prev => {
            const lines = prev.split('\n');
            lines[lines.length - 1] = fullLine.substring(0, currentChar + 1);
            return lines.join('\n');
          });
          currentChar++;
          timeout = setTimeout(typeCode, 20 + Math.random() * 30); 
        } else {
          currentLine++;
          currentChar = 0;
          if (currentLine < codeLines.length) {
            setText(prev => prev + '\n');
            timeout = setTimeout(typeCode, 100); 
          } else {
            // Finished typing, show output
            setTimeout(() => setShowOutput(true), 500);
          }
        }
      }
    };

    timeout = setTimeout(typeCode, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-[#333] font-mono text-sm"
    >
      {/* Title Bar */}
      <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#1e1e1e] select-none">
        <div className="flex items-center gap-2">
           <Menu className="w-4 h-4 text-gray-400" />
           <span className="text-xs text-gray-400 ml-2">File</span>
           <span className="text-xs text-gray-400">Edit</span>
           <span className="text-xs text-gray-400">View</span>
        </div>
        <span className="text-xs text-gray-400 absolute left-1/2 transform -translate-x-1/2">main.dart - Portfolio - Visual Studio Code</span>
        <div className="flex items-center gap-3">
          <Minus className="w-3 h-3 text-gray-400" />
          <Square className="w-3 h-3 text-gray-400" />
          <X className="w-3 h-3 text-gray-400" />
        </div>
      </div>

      <div className="flex h-[400px]">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 border-r border-[#1e1e1e]">
          <FileCode className="w-6 h-6 text-white opacity-100" />
          <Search className="w-6 h-6 text-gray-500 hover:text-white transition-colors" />
          <GitGraph className="w-6 h-6 text-gray-500 hover:text-white transition-colors" />
        </div>

        {/* Sidebar (Explorer) */}
        <div className="w-48 bg-[#252526] hidden md:block border-r border-[#1e1e1e] text-gray-400 p-2">
          <div className="text-xs font-bold mb-2 pl-2">EXPLORER</div>
          <div className="pl-2">
            <div className="flex items-center gap-1 text-xs mb-1">
              <span className="text-gray-500">▼</span> PORTFOLIO
            </div>
            <div className="pl-4 text-xs space-y-1">
              <div className="flex items-center gap-1 text-blue-400 bg-[#37373d] -mx-4 px-4 py-1">
                <span className="text-blue-400">d</span> main.dart
              </div>
              <div className="flex items-center gap-1 hover:text-white cursor-pointer">
                <span className="text-green-400">yaml</span> pubspec.yaml
              </div>
              <div className="flex items-center gap-1 hover:text-white cursor-pointer">
                <span className="text-yellow-400">{}</span> README.md
              </div>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 bg-[#1e1e1e] flex flex-col relative">
          {/* Tabs */}
          <div className="flex bg-[#252526] border-b border-[#1e1e1e]">
             <div className="px-3 py-2 bg-[#1e1e1e] text-gray-200 text-xs flex items-center gap-2 border-t border-blue-500">
               <span className="text-blue-400">d</span> main.dart
               <X className="w-3 h-3 ml-1 text-gray-500" />
             </div>
          </div>

          {/* Code Content */}
          <div className="p-4 text-gray-300 overflow-auto flex-1 font-fira-code">
            <pre>
              <code className="language-dart">
                {text.split('\n').map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell text-gray-600 select-none pr-4 text-right w-8 text-xs">{i + 1}</span>
                    <span className="table-cell">
                      {line.split(/(\s+|[(){}[\].,;'])/).map((part, j) => {
                         if (!part) return null;
                         if (part.trim() === '') return <span key={j}>{part}</span>;
                         
                         // Dart/Flutter Highlighting logic
                         if (['import', 'package', 'class', 'extends', 'const', 'return', 'super'].includes(part)) 
                           return <span key={j} className="text-[#C586C0]">{part}</span>; // Keywords (Purple)
                         
                         if (['PortfolioApp', 'StatelessWidget', 'Widget', 'BuildContext', 'MaterialApp', 'ThemeData', 'Scaffold', 'Center', 'Text'].includes(part)) 
                           return <span key={j} className="text-[#4EC9B0]">{part}</span>; // Classes (Teal)
                           
                         if (['key', 'title', 'theme', 'home', 'body', 'child'].includes(part)) 
                           return <span key={j} className="text-[#9CDCFE]">{part}</span>; // Properties (Light Blue)
                         
                         if (part.startsWith("'") || part.endsWith("'")) 
                           return <span key={j} className="text-[#CE9178]">{part}</span>; // Strings (Orange)
                           
                         if (part === '@override') 
                           return <span key={j} className="text-[#DCDCAA]">{part}</span>; // Annotations (Yellow)

                         return <span key={j} className="text-[#D4D4D4]">{part}</span>; // Default
                      })}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* Floating Run Button */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-10 right-4 bg-green-600 p-2 rounded-full shadow-lg cursor-pointer hover:bg-green-500 transition-colors z-10"
          >
             <Play className="w-4 h-4 text-white fill-current" />
          </motion.div>

          {/* Terminal Output Panel */}
          {showOutput && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 120 }}
              className="bg-[#1e1e1e] border-t border-[#333] p-2 overflow-hidden flex flex-col"
            >
              <div className="flex gap-4 text-xs text-gray-500 border-b border-[#333] pb-1 mb-2 uppercase tracking-wider">
                 <span className="text-white border-b border-white pb-1">Terminal</span>
                 <span>Output</span>
                 <span>Debug Console</span>
              </div>
              <div className="font-mono text-xs text-gray-300 space-y-1 overflow-y-auto">
                 <div className="flex items-center gap-2">
                    <span className="text-green-500">➜</span>
                    <span>flutter run -d chrome</span>
                 </div>
                 <div className="text-gray-400">Launching lib/main.dart on Chrome in debug mode...</div>
                 <div className="text-gray-400">Waiting for connection from debug service on Chrome...</div>
                 <div className="text-blue-400">Debug service listening on ws://127.0.0.1:56231/ws</div>
                 <div className="text-green-400">💪 Application finished.</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <div className="bg-[#007acc] text-white px-3 py-1 text-[10px] flex items-center justify-between">
         <div className="flex gap-3">
            <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> main*</span>
            <span>0 errors, 0 warnings</span>
         </div>
         <div className="flex gap-3">
            <span>Ln 17, Col 1</span>
            <span>UTF-8</span>
            <span>Dart</span>
            <span>Flutter 3.19.0</span>
         </div>
      </div>
    </motion.div>
  );
};

export default CodeTerminal;
