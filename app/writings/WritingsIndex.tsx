'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { TagFilteredList } from 'quire/list'
import type { Tag } from 'quire'

export type WritingRow = { slug: string; title: string; subtitle: string | null; tags: Tag[] }

/**
 * Every published writing, narrowed by tag in place (quire/list).
 *
 * One page with a filter rather than a page per tag (Eric, 2026-09-11): the chosen tag
 * rides in ?tag=, so a filtered view is still a link, and there is one address to keep
 * instead of one per tag. A client component because the filter is state; the page above
 * passes it plain data, since functions do not cross from a server component to a client one.
 */
export default function WritingsIndex({
  items,
  initialTags,
  children,
}: {
  items: WritingRow[]
  /** Every ?tag= as the server read it, so a shared link is filtered before script runs. */
  initialTags: string[]
  /** The reading order, shown under the filter until a tag is chosen. */
  children: ReactNode
}) {
  return (
    <TagFilteredList
      items={items}
      initialTags={initialTags}
      href={(w) => `/writings/${w.slug}/`}
      Link={Link}
      describe={(n, chosen) =>
        chosen.length
          ? `${n} ${n === 1 ? 'writing' : 'writings'} tagged ${chosen.map((t) => t.label).join(' and ')}`
          : `All ${n} writings`}
      filterLabel="Filter by tag"
      placeholder="Type a tag"
      placeholderMore="Add another tag"
      classNames={{
        root: 'tag-filter', control: 'tag-control', filterLabel: 'label', chips: 'tag-chips',
        chip: 'tag-chip', input: 'tag-input', listbox: 'tag-options', option: 'tag-option',
        activeOption: 'tag-option is-active', status: 'label', item: 'entry',
      }}
      renderItem={(w) => (
        <>
          <div className="entry-title">{w.title}</div>
          {w.subtitle && <div className="entry-sub">{w.subtitle}</div>}
        </>
      )}
    >
      {children}
    </TagFilteredList>
  )
}
