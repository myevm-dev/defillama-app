import * as React from 'react'
import styled from 'styled-components'
import { CheckboxCheck } from 'ariakit'
import { BasicLink } from '~/components/Link'
import { primaryColor } from '~/constants/colors'
import { transparentize } from 'polished'

export const Panel = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.advancedBG};
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.bg3};
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
`

export const PanelThicc = styled(Panel)`
	display: none;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;

	@media (min-width: 80rem) {
		display: flex;
	}
`

export const PanelSmol = styled(Panel)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;

	@media (min-width: 80rem) {
		display: none;
	}
`

export const ChartAndValuesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;

	#chartWrapper {
		flex: 1;
		min-height: 381px;
	}

	@media screen and (min-width: 80rem) {
		flex-direction: row;
	}
`

export const BreakpointPanels = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	flex: 1;

	@media screen and (min-width: 80rem) {
		max-width: 350px;
	}
`

export const BreakpointPanel = styled(Panel)`
	flex: 1;
	gap: 4px;
	padding: 18px 25px;
	justify-content: center;

	& > h1,
	& > h2 {
		min-width: 0;
		font-weight: 500;
		font-size: 1rem;
	}

	& > p {
		margin: 4px 0 -6px;
		font-weight: 600;
		font-size: 2rem;
		color: var(--tile-text-color);
	}
`

export const PanelHiddenMobile = styled(BreakpointPanel)`
	@media screen and (max-width: 50rem) {
		display: none;
	}
`

export const Divider = () => <hr className="border-[rgba(43,43,43,0.035)] dark:border-[rgba(43,43,43,0.435)]" />

export const IconWrapper = styled.div`
	position: absolute;
	right: 0;
	border-radius: 3px;
	height: 16px;
	width: 16px;
	padding: 0px;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.text1};

	:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`

export const FormSubmitBtn = styled.button`
	padding: 12px;
	margin: 12px 0 0;
	background: #2172e5;
	color: #fff;
	font-weight: 400;
	border-radius: 8px;

	:hover,
	:focus-visible {
		background: #4190ff;
	}

	:disabled {
		opacity: 0.5;
	}
`

export const ApplyFilters = styled(FormSubmitBtn)`
	@media screen and (min-width: 640px) {
		border-radius: 0 0 8px 8px;
	}
`

export const Checkbox = styled(CheckboxCheck)`
	display: flex;
	height: 13px;
	width: 13px;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	border-radius: 2px;
	border: 1px solid #28a2b5;
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
	color: ${({ theme }) => theme.text1};
	flex-shrink: 0;
`

export const DownloadButton = styled(BasicLink)`
	padding: 4px 6px;
	border-radius: 6px;
	background: ${({ theme }) => theme.bg3};
	position: absolute;
	bottom: 8px;
	right: 8px;
	display: flex;
	align-items: center;
`

export const Checkbox2 = styled.input`
	position: relative;
	top: 1px;
	padding: 0;
	-webkit-appearance: none;
	appearance: none;
	background-color: transparent;
	width: 1em;
	height: 1em;
	border: ${({ theme }) => '1px solid ' + theme.text4};
	border-radius: 0.15em;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;
	cursor: pointer;

	::before {
		content: '';
		width: 0.5em;
		height: 0.5em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: ${({ theme }) => 'inset 1em 1em ' + theme.text1};
		transform-origin: bottom left;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}

	:checked::before {
		transform: scale(1);
	}

	:focus-visible {
		outline-offset: max(2px, 0.15em);
	}
`

export const TabList = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	border-bottom: ${({ theme }) => '1px solid ' + theme.divider};
`

export const Tab = styled.button`
	padding: 8px 24px;
	white-space: nowrap;
	border-bottom: 1px solid transparent;

	&[aria-selected='true'] {
		border-bottom: ${'1px solid ' + primaryColor};
	}

	& + & {
		border-left: ${({ theme }) => '1px solid ' + theme.divider};
	}

	:first-child {
		border-top-left-radius: 12px;
	}

	:hover,
	:focus-visible {
		background-color: ${transparentize(0.9, primaryColor)};
	}
`
