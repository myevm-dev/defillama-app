import styled from 'styled-components'
import { SelectLabel, SelectArrow } from 'ariakit/select'
import { Checkbox } from '~/components'
import { feesOptions, protocolsAndChainsOptions } from './options'
import { SelectItem, SelectPopover, Select } from '../common'
import { useFeesFilterState, useProtocolsFilterState, useTvlAndFeesFilterState } from './useProtocolFilterState'
import { useSetPopoverStyles } from '~/components/Popover/utils'
import { Tooltip } from '~/components/Tooltip'
import { Icon } from '~/components/Icon'

const WrapperWithLabel = styled.div`
	display: none;
	gap: 8px;
	align-items: center;
	margin-left: auto;

	@media screen and (min-width: ${({ theme }) => theme.bpLg}) and (max-width: ${({ theme }) => theme.bp2Xl}) {
		display: flex;
		padding: 0 16px;
	}
`

const Label = styled(SelectLabel)`
	color: ${({ theme }) => theme.text1};
	font-weight: 400;
	font-size: 0.75rem;
	opacity: 0.8;
	white-space: nowrap;
`

const Menu = styled(Select)`
	background: ${({ theme }) => (theme.mode === 'dark' ? '#000' : '#f5f5f5')};
`

function renderValue(value: string[]) {
	if (value.length === 0) return 'No option selected'
	if (value.length === 1) return protocolsAndChainsOptions.find((e) => e.key === value[0])?.name ?? value[0]
	return `${value.length} options selected`
}

interface IProps {
	options?: { name: string; key: string; help?: string }[]
}

export function TabletProtocolsFilters({ options, ...props }: IProps) {
	const select = useProtocolsFilterState({ sameWidth: true })

	const [isLarge] = useSetPopoverStyles()

	const tvlOptions = options || protocolsAndChainsOptions

	return (
		<WrapperWithLabel {...props}>
			<Label state={select}>INCLUDE IN TVL: </Label>
			<Menu state={select}>
				<span>{renderValue(select.value)}</span>
				<SelectArrow />
			</Menu>
			{select.mounted && (
				<SelectPopover state={select} modal={!isLarge}>
					{tvlOptions.map(({ key, name, help }) => (
						<SelectItem key={key} value={key}>
							{help ? (
								<Tooltip content={help}>
									<span>{name}</span>
									<Icon name="help-circle" height={15} width={15} />
								</Tooltip>
							) : (
								name
							)}
							<Checkbox checked={select.value.includes(key)} />
						</SelectItem>
					))}
				</SelectPopover>
			)}
		</WrapperWithLabel>
	)
}

export function TabletFeesFilters({ options, ...props }: IProps) {
	const select = useFeesFilterState({ sameWidth: true })

	const [isLarge] = useSetPopoverStyles()

	return (
		<WrapperWithLabel {...props}>
			<Label state={select}>INCLUDE IN FEES: </Label>
			<Menu state={select}>
				<span>{renderValue(select.value)}</span>
				<SelectArrow />
			</Menu>
			{select.mounted && (
				<SelectPopover state={select} modal={!isLarge}>
					{feesOptions.map(({ key, name, help }) => (
						<SelectItem key={key} value={key}>
							{help ? (
								<Tooltip content={help}>
									<span>{name}</span>
									<Icon name="help-circle" height={15} width={15} />
								</Tooltip>
							) : (
								name
							)}
							<Checkbox checked={select.value.includes(key)} />
						</SelectItem>
					))}
				</SelectPopover>
			)}
		</WrapperWithLabel>
	)
}

export function TabletTvlAndFeesFilters({ options, ...props }: IProps) {
	const select = useTvlAndFeesFilterState({ options })

	const [isLarge] = useSetPopoverStyles()

	return (
		<WrapperWithLabel {...props}>
			<Label state={select}>INCLUDE IN STATS: </Label>
			<Menu state={select}>
				<span>{renderValue(select.value)}</span>
				<SelectArrow />
			</Menu>
			{select.mounted && (
				<SelectPopover state={select} modal={!isLarge}>
					{options.map(({ key, name, help }) => (
						<SelectItem key={key} value={key}>
							{help ? (
								<Tooltip content={help}>
									<span>{name}</span>
									<Icon name="help-circle" height={15} width={15} />
								</Tooltip>
							) : (
								name
							)}
							<Checkbox checked={select.value.includes(key)} />
						</SelectItem>
					))}
				</SelectPopover>
			)}
		</WrapperWithLabel>
	)
}
