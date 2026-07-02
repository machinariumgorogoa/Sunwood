-- 2026-06-29 免费评估表反馈修改：数据库迁移
-- 适用表：public.candidate_assessments
-- 说明：本次迁移只新增字段，不删除旧字段，保证历史数据可读取

ALTER TABLE public.candidate_assessments
  -- 新增：咨询服务类型（多选，以逗号分隔存储）
  ADD COLUMN IF NOT EXISTS consult_service_types text,

  -- 新增：语言成绩单项分数（JSONB 结构：{ielts:{listening,speaking,reading,writing}, pte:{...}, other:{name,...}}）
  ADD COLUMN IF NOT EXISTS language_scores jsonb,

  -- 新增：语言成绩单文件 URL
  ADD COLUMN IF NOT EXISTS english_score_url text,

  -- 新增：是否已完成职业评估（布尔，可选）
  ADD COLUMN IF NOT EXISTS has_skills_assessment boolean,

  -- 新增：职业评估职位（可选文本）
  ADD COLUMN IF NOT EXISTS skills_assessed_occupation text,

  -- 新增：感兴趣的签证类别/服务（多选，以逗号分隔存储）
  ADD COLUMN IF NOT EXISTS visa_categories text,

  -- 新增：多文件 URL（JSONB 结构：{resume, language_score, education_cert, transcript}）
  ADD COLUMN IF NOT EXISTS document_urls jsonb,

  -- 新增：低龄留学/游学/插班意向
  ADD COLUMN IF NOT EXISTS study_tour_interest text;

-- 备注：text 字段以逗号分隔存储，当前数据量无需额外索引；后续如需按类别筛选，可改用 text[] 或 JSONB 并建立 GIN 索引。
