import React, { useCallback, useMemo } from 'react';
import { FlatListProps, ListRenderItemInfo, Animated } from 'react-native';
import CampaignsListItem from '@modules/Campaigns/CampaignsListItem';
import Spinner from '@components/Spinner';
import Note from '@components/Note';
import { ICampaign, ICampaignPreview } from '@LTypes/campaign';
import { translate } from '@i18n';
import { StyledFlatList } from './styled';
import RefreshButton from '@components/RefreshButton';

interface IProps extends Pick<FlatListProps<ICampaign | ICampaignPreview>, 'data'> {
	error?: boolean;
	loading?: boolean;
	scrollY: Animated.Value;
	headerHeight: number;
	load: () => void;
}

const keyExtractor = (item: ICampaign | ICampaignPreview) => item._id;

export default ({ scrollY, headerHeight, loading, error, load, ...props }: IProps) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<ICampaign | ICampaignPreview>) => (
			<CampaignsListItem item={item} />
		),
		[],
	);

	const listContentOffset = useMemo(
		() =>
			Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
				useNativeDriver: true,
			}),
		[scrollY],
	);

	const emptyNote = <Note padding={25}>{translate('campaigns.listEmptyNote')}</Note>;

	return (
		<StyledFlatList
			scrollEventThrottle={16}
			headerHeight={headerHeight}
			onScroll={listContentOffset}
			removeClippedSubviews
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			onEndReachedThreshold={1}
			onEndReached={load}
			ListFooterComponent={loading ? <Spinner paddingAreaSize={25} /> : undefined}
			ListEmptyComponent={
				loading ? (
					undefined
				) : (
					<>
						<RefreshButton onPress={load} />
						{!error && emptyNote}
					</>
				)
			}
			{...props}
		/>
	);
};
