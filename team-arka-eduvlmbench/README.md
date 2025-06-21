# EduVLM-Bench: A Multimodal Benchmark for Educational Concept Learning

## 🎯 Project Overview

**EduVLM-Bench** is a comprehensive benchmark designed to evaluate Vision-Language Models (VLMs) on educational concept prerequisite identification. The core problem we're addressing is: *When a student fails to answer a question correctly, how can we identify the missing prerequisites that will help bridge the gap from confusion to correct understanding?*

### Key Innovation
Rather than just evaluating whether models can solve problems, we focus on **diagnostic capability** - can models identify what knowledge is missing when learning breaks down?

## 🎓 Research Vision

This project aims to create a framework that can:
- **Identify Missing Prerequisites**: Given a student's wrong answer, pinpoint specific knowledge gaps
- **Generate Learning Paths**: Provide structured pathways from current understanding to mastery
- **Reduce Annotation Burden**: Use AI-generated concept taxonomies to streamline human annotation
- **Benchmark VLM Performance**: Evaluate models across different scales (2B, 4B, 7B) and architectures

## 📊 Current Progress

### ✅ Phase 1: Concept Taxonomy Building (IN PROGRESS)

We've successfully extracted prerequisite concepts from the first 200 questions of GSM-8K using **Gemini 1.5 Flash**.

#### Current Statistics
- **Dataset**: GSM-8K first 200 questions
- **Model Used**: Gemini 1.5 Flash
- **Output**: Comprehensive CSV of unique mathematical concepts
- **Processing**: 200/200 questions completed
- **Concepts Identified**: ~[X unique concepts] (extracted and sorted)

#### Sample Concepts Extracted
Addition
Addition And Subtraction Of Integers
Addition And Subtraction Of Time
Times As Old As
Twice As Old As

### 🔄 Next Steps: Phase 2 Error-Prerequisite Mapping

**Current Task**: Generate wrong answers with targeted prerequisite gaps using Gemma-3-4B

**Planned Approach**:
1. **Question-by-Question Mapping**: Create specific prerequisite mappings for each problem
2. **Controlled Error Generation**: Use targeted prompting to generate realistic wrong answers
3. **Missing Concept Injection**: Remove specific prerequisites to create authentic confusion
